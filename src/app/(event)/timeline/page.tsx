import AcaraKami from "@/components/event/acara-kami";
import TimelineComponents from "@/components/event/timeline";
import { ScrollContext } from "@/context/smooth-scorrel-context";

const TimelinePage = () => {
  return (
    <ScrollContext>
      <TimelineComponents />
      <AcaraKami />
    </ScrollContext>
  );
};

export default TimelinePage;
