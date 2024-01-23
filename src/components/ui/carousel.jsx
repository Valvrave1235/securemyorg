import * as React from "react"
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef((
  {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  },
  ref
) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) {
      return
    }

    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    };
  }, [api, onSelect])

  return (
    (<CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}>
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>)
  );
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation, canScrollPrev, canScrollNext } = useCarousel();

  console.log(canScrollPrev, "canScrollPrev")
  console.log(canScrollNext, "canScrollNext")
  return (
   <div className="relative">
      {/* Gradient overlay on the left (for horizontal orientation) or top (for vertical orientation) */}
      {orientation === "horizontal" && canScrollPrev && (
        <div
          className="absolute left-0 top-0 bottom-0 w-4 lg:w-24 g-gradient-to-r from-cyan-500 to-blue-500 z-10"
          style={{
            backgroundImage: "linear-gradient(270deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%)",
          }}
        />
      )}
      {orientation === "vertical" && canScrollPrev && (
        <div
          className="absolute left-0 top-0 h-4 g-gradient-to-r from-cyan-500 to-blue-500 z-10"
          style={{
            backgroundImage: "linear-gradient(270deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%)",
          }}
        />
      )}
      <div ref={carouselRef} className="overflow-hidden relative">
        
  
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            "relative", // Add relative positioning
            className
          )}
          {...props}
        >
         
          {/* Carousel items */}
          {props.children}
  
          
        </div>
        
      </div>
      {/* Gradient overlay on the right (for horizontal orientation) or bottom (for vertical orientation) */}
      {orientation === "horizontal" && canScrollNext && (
        <div
          className="absolute -right-8 top-0 bottom-0 bg-gradient-to-l from-transparent to-[white] z-10 w-4 lg:w-24"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%)",
          }}
        />
      )}
      {orientation === "vertical" && canScrollNext && (
        <div
          className="absolute bottom-0 right-0 h-4 bg-gradient-to-t from-transparent to-[white] z-10"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%)",
          }}
        />
      )}
   </div>
  );
});


const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    (<div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props} />)
  );
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(" bg-[#343B46] h-12 w-12 rounded-full", orientation === "horizontal"
        ? "-left-12 top-1/2 -translate-y-1/2"
        : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}>
      <ArrowLeft className="h-6 w-6" />
      <span className="sr-only">Previous slide</span>
    </Button>)
  );
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    (<Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("bg-[#343B46] h-12 w-12 rounded-full", orientation === "horizontal"
        ? "-right-12 top-1/2 -translate-y-1/2"
        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}>
      <ArrowRight className="h-6 w-6" />
      <span className="sr-only">Next slide</span>
    </Button>)
  );
})
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
