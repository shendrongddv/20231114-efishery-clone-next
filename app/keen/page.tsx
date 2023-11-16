"use client";

import Keen_NavigationControls_ArrowsDots from "./_examples/arrows-dots";
import Keen_Autoplay_AutoMove from "./_examples/auto-move";
import Keen_Autoplay_AutoSwitch from "./_examples/auto-switch";
import Keen_Autowidth from "./_examples/autowidth";
import Keen_Breakpoints from "./_examples/breakpoints";
import Keen_CenteredSlides from "./_examples/centered-slides";
import Keen_Default from "./_examples/default";
import Keen_FreeMode from "./_examples/free-mode";
import Keen_FreeSnapMode from "./_examples/free-snap-mode";
import Keen_Loop from "./_examples/loop";
import Keen_LoopMinMax from "./_examples/loop-min-max";
import Keen_MultipleSlides from "./_examples/multiple-slides";
import Keen_Range from "./_examples/range";
import Keen_RTLMode from "./_examples/rtl-mode";
import Keen_NavigationControls_ScrollWheelControls from "./_examples/scroll-wheel-controls";
import Keen_Spacing from "./_examples/spacing";
import Keen_NavigationControls_Thumbnails from "./_examples/thumbnails";
import Keen_Vertical from "./_examples/vertical";

const KeenPage = () => {
  return (
    <main className="p-4">
      <div className="container flex flex-col gap-12">
        {/* Basic: Default */}
        <Keen_Default />

        {/* Basic: Loop */}
        <Keen_Loop />

        {/* Basic: LoopMinMax */}
        <Keen_LoopMinMax />

        {/* Basic: MultipleSlides */}
        <Keen_MultipleSlides />

        {/* Basic: Spacing */}
        <Keen_Spacing />

        {/* Basic: FreeMode */}
        <Keen_FreeMode />

        {/* Basic: FreeSnapMode */}
        <Keen_FreeSnapMode />

        {/* Basic: CenteredSlides */}
        <Keen_CenteredSlides />

        {/* Basic: Vertical */}
        <Keen_Vertical />

        {/* Basic: Breakpoints */}
        <Keen_Breakpoints />

        {/* Basic: RTLMode */}
        <Keen_RTLMode />

        {/* Basic: Range */}
        <Keen_Range />

        {/* Basic: AutoWidth */}
        <Keen_Autowidth />

        {/* Basic: SliderInSlider */}

        {/* Basic: VariableSlides */}

        {/* Basic: VariableScrolling */}

        {/* NavigationControls: ArrowsDots */}
        <Keen_NavigationControls_ArrowsDots />

        {/* NavigationControls: Thumbnails */}
        <Keen_NavigationControls_Thumbnails />

        {/* NavigationControls: ScrollWheelControls */}
        <Keen_NavigationControls_ScrollWheelControls />

        {/* Autoplay: AutoMove */}
        <Keen_Autoplay_AutoMove />

        {/* Autoplay: AutoSwitch */}
        <Keen_Autoplay_AutoSwitch />
      </div>
    </main>
  );
};

export default KeenPage;
