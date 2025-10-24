"use client";

import { contactSchemasType, contactShemas } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { RiCheckboxCircleFill } from "@remixicon/react";
import { Alert, AlertIcon, AlertTitle } from "../ui/alert";
import { useState } from "react";
import { sendGmail } from "@/lib/action/contact";
import { cn } from "@/lib/utils";

const FormContact = () => {
  const [onLoader, setOnloader] = useState<boolean>(false);

  const form = useForm<contactSchemasType>({
    resolver: zodResolver(contactShemas),
    defaultValues: {
      email: "",
      message: "",
      nama: "",
    },
  });

  const { control } = form;

  const onSubmit = form.handleSubmit(async (value: contactSchemasType) => {
    setOnloader(true);
    try {
      const req = await sendGmail(value);

      if (req.status === "error") {
        toast.custom(
          (t) => (
            <Alert
              variant="destructive"
              icon="destructive"
              onClose={() => toast.dismiss(t)}
            >
              <AlertIcon>
                <RiCheckboxCircleFill />
              </AlertIcon>
              <AlertTitle>{req.message}</AlertTitle>
            </Alert>
          ),
          {
            duration: 5000,
          }
        );
      }

      toast.custom(
        (t) => (
          <Alert
            variant="primary"
            icon="success"
            onClose={() => toast.dismiss(t)}
          >
            <AlertIcon>
              <RiCheckboxCircleFill />
            </AlertIcon>
            <AlertTitle>{req.message}</AlertTitle>
          </Alert>
        ),
        {
          duration: 5000,
        }
      );
    } catch (error) {
      console.error(error);
      toast.custom(
        (t) => (
          <Alert
            variant="primary"
            icon="success"
            onClose={() => toast.dismiss(t)}
          >
            <AlertIcon>
              <RiCheckboxCircleFill />
            </AlertIcon>
            <AlertTitle>Terjadi Error yg tidak terduga</AlertTitle>
          </Alert>
        ),
        {
          duration: 5000,
        }
      );
    } finally {
      setOnloader(false);
    }
  });

  return (
    <div className="w-full max-w-xl md:max-w-3xl mx-auto mt-14 mb-52">
      <Form {...form}>
        <form
          onSubmit={onSubmit}
          className="w-fullflex flex-col items-center justify-center space-y-5"
        >
          <div className="w-full flex items-center justify-center gap-2 md:gap-5 px-2 md:px-10">
            <FormField
              control={control}
              name="nama"
              render={({ field }) => (
                <FormItem className="w-full h-fit">
                  <FormControl>
                    <Input
                      placeholder="your Name"
                      {...field}
                      className="rounded-2xl h-14"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full h-fit">
                  <FormControl>
                    <Input
                      placeholder="your Email"
                      {...field}
                      className="h-14 rounded-2xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full px-2 md:px-10">
            <FormField
              control={control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full h-fit ">
                  <FormControl>
                    <Textarea
                      placeholder="your Message"
                      {...field}
                      className="rounded-2xl h-62 [resize:none]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center space-y-3">
            <Button
              disabled={onLoader}
              variant={"default"}
              className={cn(
                "bg-primary-700 hover:bg-primary-700/90 text-lg p-7 rounded-4xl shadow text-background font-semibold",
                onLoader && "bg-primary-700/90 cursor-progress"
              )}
            >
              Kirim Pertanyaan Kamu
            </Button>
            <p className="text-xs text-accent-foreground max-w-xs text-center ">
              By clicking, you agree to our{" "}
              <span className="underline hover:text-accent-foreground/80 cursor-pointer transition-all duration-300">
                Terms & Conditions,
              </span>{" "}
              <span className="underline hover:text-accent-foreground/80 cursor-pointer transition-all duration-300">
                Privacy and Data Protection Policy
              </span>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormContact;
