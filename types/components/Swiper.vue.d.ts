declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    ChatMain: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Swiper: import("vue").DefineComponent<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        wrapperTag: {
            type: StringConstructor;
            default: string;
        };
        modules: {
            type: ArrayConstructor;
            default: undefined;
        };
        init: {
            type: BooleanConstructor;
            default: undefined;
        };
        direction: {
            type: import("vue").PropType<import("swiper/types").SwiperOptions["direction"]>;
            default: import("swiper/types").SwiperOptions["direction"];
        };
        oneWayMovement: {
            type: import("vue").PropType<import("swiper/types").SwiperOptions["oneWayMovement"]>;
            default: import("swiper/types").SwiperOptions["oneWayMovement"];
        };
        touchEventsTarget: {
            type: import("vue").PropType<import("swiper/types").SwiperOptions["touchEventsTarget"]>;
            default: undefined;
        };
        initialSlide: {
            type: NumberConstructor;
            default: undefined;
        };
        speed: {
            type: NumberConstructor;
            default: undefined;
        };
        cssMode: {
            type: BooleanConstructor;
            default: undefined;
        };
        updateOnWindowResize: {
            type: BooleanConstructor;
            default: undefined;
        };
        resizeObserver: {
            type: BooleanConstructor;
            default: undefined;
        };
        nested: {
            type: BooleanConstructor;
            default: undefined;
        };
        focusableElements: {
            type: StringConstructor;
            default: undefined;
        };
        width: {
            type: NumberConstructor;
            default: undefined;
        };
        height: {
            type: NumberConstructor;
            default: undefined;
        };
        preventInteractionOnTransition: {
            type: BooleanConstructor;
            default: undefined;
        };
        userAgent: {
            type: StringConstructor;
            default: undefined;
        };
        url: {
            type: StringConstructor;
            default: undefined;
        };
        edgeSwipeDetection: {
            type: BooleanConstructor | StringConstructor;
            default: undefined;
        };
        edgeSwipeThreshold: {
            type: NumberConstructor;
            default: undefined;
        };
        autoHeight: {
            type: BooleanConstructor;
            default: undefined;
        };
        setWrapperSize: {
            type: BooleanConstructor;
            default: undefined;
        };
        virtualTranslate: {
            type: BooleanConstructor;
            default: undefined;
        };
        effect: {
            type: import("vue").PropType<import("swiper/types").SwiperOptions["effect"]>;
            default: undefined;
        };
        breakpoints: {
            type: import("vue").PropType<import("swiper/types").SwiperOptions["breakpoints"]>;
            default: undefined;
        };
        spaceBetween: {
            type: import("vue").PropType<import("swiper/types").SwiperOptions["spaceBetween"]>;
            default: undefined;
        };
        slidesPerView: {
            type: import("vue").PropType<import("swiper/types").SwiperOptions["slidesPerView"]>;
            default: undefined;
        };
        maxBackfaceHiddenSlides: {
            type: NumberConstructor;
            default: undefined;
        };
        slidesPerGroup: {
            type: NumberConstructor;
            default: undefined;
        };
        slidesPerGroupSkip: {
            type: NumberConstructor;
            default: undefined;
        };
        slidesPerGroupAuto: {
            type: BooleanConstructor;
            default: undefined;
        };
        centeredSlides: {
            type: BooleanConstructor;
            default: undefined;
        };
        centeredSlidesBounds: {
            type: BooleanConstructor;
            default: undefined;
        };
        slidesOffsetBefore: {
            type: NumberConstructor;
            default: undefined;
        };
        slidesOffsetAfter: {
            type: NumberConstructor;
            default: undefined;
        };
        normalizeSlideIndex: {
            type: BooleanConstructor;
            default: undefined;
        };
        centerInsufficientSlides: {
            type: BooleanConstructor;
            default: undefined;
        };
        watchOverflow: {
            type: BooleanConstructor;
            default: undefined;
        };
        roundLengths: {
            type: BooleanConstructor;
            default: undefined;
        };
        touchRatio: {
            type: NumberConstructor;
            default: undefined;
        };
        touchAngle: {
            type: NumberConstructor;
            default: undefined;
        };
        simulateTouch: {
            type: BooleanConstructor;
            default: undefined;
        };
        shortSwipes: {
            type: BooleanConstructor;
            default: undefined;
        };
        longSwipes: {
            type: BooleanConstructor;
            default: undefined;
        };
        longSwipesRatio: {
            type: NumberConstructor;
            default: undefined;
        };
        longSwipesMs: {
            type: NumberConstructor;
            default: undefined;
        };
        followFinger: {
            type: BooleanConstructor;
            default: undefined;
        };
        allowTouchMove: {
            type: BooleanConstructor;
            default: undefined;
        };
        threshold: {
            type: NumberConstructor;
            default: undefined;
        };
        touchMoveStopPropagation: {
            type: BooleanConstructor;
            default: undefined;
        };
        touchStartPreventDefault: {
            type: BooleanConstructor;
            default: undefined;
        };
        touchStartForcePreventDefault: {
            type: BooleanConstructor;
            default: undefined;
        };
        touchReleaseOnEdges: {
            type: BooleanConstructor;
            default: undefined;
        };
        uniqueNavElements: {
            type: BooleanConstructor;
            default: undefined;
        };
        resistance: {
            type: BooleanConstructor;
            default: undefined;
        };
        resistanceRatio: {
            type: NumberConstructor;
            default: undefined;
        };
        watchSlidesProgress: {
            type: BooleanConstructor;
            default: undefined;
        };
        grabCursor: {
            type: BooleanConstructor;
            default: undefined;
        };
        preventClicks: {
            type: BooleanConstructor;
            default: undefined;
        };
        preventClicksPropagation: {
            type: BooleanConstructor;
            default: undefined;
        };
        slideToClickedSlide: {
            type: BooleanConstructor;
            default: undefined;
        };
        loop: {
            type: BooleanConstructor;
            default: undefined;
        };
        loopedSlides: {
            type: NumberConstructor;
            default: undefined;
        };
        loopPreventsSliding: {
            type: BooleanConstructor;
            default: undefined;
        };
        rewind: {
            type: BooleanConstructor;
            default: undefined;
        };
        allowSlidePrev: {
            type: BooleanConstructor;
            default: undefined;
        };
        allowSlideNext: {
            type: BooleanConstructor;
            default: undefined;
        };
        swipeHandler: {
            type: BooleanConstructor;
            default: undefined;
        };
        noSwiping: {
            type: BooleanConstructor;
            default: undefined;
        };
        noSwipingClass: {
            type: StringConstructor;
            default: undefined;
        };
        noSwipingSelector: {
            type: StringConstructor;
            default: undefined;
        };
        passiveListeners: {
            type: BooleanConstructor;
            default: undefined;
        };
        containerModifierClass: {
            type: StringConstructor;
            default: undefined;
        };
        slideClass: {
            type: StringConstructor;
            default: undefined;
        };
        slideActiveClass: {
            type: StringConstructor;
            default: undefined;
        };
        slideVisibleClass: {
            type: StringConstructor;
            default: undefined;
        };
        slideNextClass: {
            type: StringConstructor;
            default: undefined;
        };
        slidePrevClass: {
            type: StringConstructor;
            default: undefined;
        };
        wrapperClass: {
            type: StringConstructor;
            default: undefined;
        };
        lazyPreloaderClass: {
            type: StringConstructor;
            default: undefined;
        };
        lazyPreloadPrevNext: {
            type: NumberConstructor;
            default: undefined;
        };
        runCallbacksOnInit: {
            type: BooleanConstructor;
            default: undefined;
        };
        observer: {
            type: BooleanConstructor;
            default: undefined;
        };
        observeParents: {
            type: BooleanConstructor;
            default: undefined;
        };
        observeSlideChildren: {
            type: BooleanConstructor;
            default: undefined;
        };
        a11y: {
            type: import("vue").PropType<import("swiper/types").A11yOptions | boolean>;
            default: undefined;
        };
        autoplay: {
            type: import("vue").PropType<import("swiper/types").AutoplayOptions | boolean>;
            default: undefined;
        };
        controller: {
            type: import("vue").PropType<import("swiper/types").ControllerOptions>;
            default: undefined;
        };
        coverflowEffect: {
            type: import("vue").PropType<import("swiper/types").CoverflowEffectOptions>;
            default: undefined;
        };
        cubeEffect: {
            type: import("vue").PropType<import("swiper/types").CubeEffectOptions>;
            default: undefined;
        };
        fadeEffect: {
            type: import("vue").PropType<import("swiper/types").FadeEffectOptions>;
            default: undefined;
        };
        flipEffect: {
            type: import("vue").PropType<import("swiper/types").FlipEffectOptions>;
            default: undefined;
        };
        creativeEffect: {
            type: import("vue").PropType<import("swiper/types").CreativeEffectOptions>;
            default: undefined;
        };
        cardsEffect: {
            type: import("vue").PropType<import("swiper/types").CardsEffectOptions>;
            default: undefined;
        };
        hashNavigation: {
            type: import("vue").PropType<import("swiper/types").HashNavigationOptions | boolean>;
            default: undefined;
        };
        history: {
            type: import("vue").PropType<import("swiper/types").HistoryOptions | boolean>;
            default: undefined;
        };
        keyboard: {
            type: import("vue").PropType<import("swiper/types").KeyboardOptions | boolean>;
            default: undefined;
        };
        mousewheel: {
            type: import("vue").PropType<import("swiper/types").MousewheelOptions | boolean>;
            default: undefined;
        };
        navigation: {
            type: import("vue").PropType<import("swiper/types").NavigationOptions | boolean>;
            default: undefined;
        };
        pagination: {
            type: import("vue").PropType<import("swiper/types").PaginationOptions | boolean>;
            default: undefined;
        };
        parallax: {
            type: import("vue").PropType<import("swiper/types").ParallaxOptions | boolean>;
            default: undefined;
        };
        scrollbar: {
            type: import("vue").PropType<import("swiper/types").ScrollbarOptions | boolean>;
            default: undefined;
        };
        thumbs: {
            type: import("vue").PropType<import("swiper/types").ThumbsOptions>;
            default: undefined;
        };
        virtual: {
            type: import("vue").PropType<import("swiper/types").VirtualOptions | boolean>;
            default: undefined;
        };
        zoom: {
            type: import("vue").PropType<import("swiper/types").ZoomOptions | boolean>;
            default: undefined;
        };
        freeMode: {
            type: import("vue").PropType<import("swiper/types").FreeModeOptions | boolean>;
            default: undefined;
        };
        grid: {
            type: import("vue").PropType<import("swiper/types").GridOptions>;
            default: undefined;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        swiper: (swiper: import("swiper/types").Swiper) => void;
        autoplayStart: (swiper: import("swiper/types").Swiper) => void;
        autoplayStop: (swiper: import("swiper/types").Swiper) => void;
        autoplayPause: (swiper: import("swiper/types").Swiper) => void;
        autoplayResume: (swiper: import("swiper/types").Swiper) => void;
        autoplayTimeLeft: (swiper: import("swiper/types").Swiper, timeLeft: number, percentage: number) => void;
        autoplay: (swiper: import("swiper/types").Swiper) => void;
        hashChange: (swiper: import("swiper/types").Swiper) => void;
        hashSet: (swiper: import("swiper/types").Swiper) => void;
        keyPress: (swiper: import("swiper/types").Swiper, keyCode: string) => void;
        scroll: (swiper: import("swiper/types").Swiper, event: WheelEvent) => void;
        navigationHide: (swiper: import("swiper/types").Swiper) => void;
        navigationShow: (swiper: import("swiper/types").Swiper) => void;
        navigationPrev: (swiper: import("swiper/types").Swiper) => void;
        navigationNext: (swiper: import("swiper/types").Swiper) => void;
        paginationRender: (swiper: import("swiper/types").Swiper, paginationEl: HTMLElement) => void;
        paginationUpdate: (swiper: import("swiper/types").Swiper, paginationEl: HTMLElement) => void;
        paginationHide: (swiper: import("swiper/types").Swiper) => void;
        paginationShow: (swiper: import("swiper/types").Swiper) => void;
        scrollbarDragStart: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        scrollbarDragMove: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        scrollbarDragEnd: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        zoomChange: (swiper: import("swiper/types").Swiper, scale: number, imageEl: HTMLElement, slideEl: HTMLElement) => void;
        init: (swiper: import("swiper/types").Swiper) => any;
        beforeDestroy: (swiper: import("swiper/types").Swiper) => void;
        slideChange: (swiper: import("swiper/types").Swiper) => void;
        slideChangeTransitionStart: (swiper: import("swiper/types").Swiper) => void;
        slideChangeTransitionEnd: (swiper: import("swiper/types").Swiper) => void;
        slideNextTransitionStart: (swiper: import("swiper/types").Swiper) => void;
        slideNextTransitionEnd: (swiper: import("swiper/types").Swiper) => void;
        slidePrevTransitionStart: (swiper: import("swiper/types").Swiper) => void;
        slidePrevTransitionEnd: (swiper: import("swiper/types").Swiper) => void;
        transitionStart: (swiper: import("swiper/types").Swiper) => void;
        transitionEnd: (swiper: import("swiper/types").Swiper) => void;
        touchStart: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        touchMove: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        touchMoveOpposite: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        sliderMove: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        touchEnd: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        click: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        tap: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        doubleTap: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        progress: (swiper: import("swiper/types").Swiper, progress: number) => void;
        reachBeginning: (swiper: import("swiper/types").Swiper) => void;
        reachEnd: (swiper: import("swiper/types").Swiper) => void;
        toEdge: (swiper: import("swiper/types").Swiper) => void;
        fromEdge: (swiper: import("swiper/types").Swiper) => void;
        setTranslate: (swiper: import("swiper/types").Swiper, translate: number) => void;
        setTransition: (swiper: import("swiper/types").Swiper, transition: number) => void;
        resize: (swiper: import("swiper/types").Swiper) => void;
        observerUpdate: (swiper: import("swiper/types").Swiper) => void;
        beforeLoopFix: (swiper: import("swiper/types").Swiper) => void;
        loopFix: (swiper: import("swiper/types").Swiper) => void;
        breakpoint: (swiper: import("swiper/types").Swiper, breakpointParams: import("swiper/types").SwiperOptions) => void;
        _beforeBreakpoint: (swiper: import("swiper/types").Swiper, breakpointParams: import("swiper/types").SwiperOptions) => void;
        _containerClasses: (swiper: import("swiper/types").Swiper, classNames: string) => void;
        _slideClass: (swiper: import("swiper/types").Swiper, slideEl: HTMLElement, classNames: string) => void;
        _slideClasses: (swiper: import("swiper/types").Swiper, slides: {
            slideEl: HTMLElement;
            classNames: string;
            index: number;
        }[]) => void;
        _swiper: (swiper: import("swiper/types").Swiper) => void;
        _freeModeNoMomentumRelease: (swiper: import("swiper/types").Swiper) => void;
        activeIndexChange: (swiper: import("swiper/types").Swiper) => void;
        snapIndexChange: (swiper: import("swiper/types").Swiper) => void;
        realIndexChange: (swiper: import("swiper/types").Swiper) => void;
        afterInit: (swiper: import("swiper/types").Swiper) => void;
        beforeInit: (swiper: import("swiper/types").Swiper) => void;
        beforeResize: (swiper: import("swiper/types").Swiper) => void;
        beforeSlideChangeStart: (swiper: import("swiper/types").Swiper) => void;
        beforeTransitionStart: (swiper: import("swiper/types").Swiper, speed: number, internal: any) => void;
        changeDirection: (swiper: import("swiper/types").Swiper) => void;
        doubleClick: (swiper: import("swiper/types").Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
        destroy: (swiper: import("swiper/types").Swiper) => void;
        momentumBounce: (swiper: import("swiper/types").Swiper) => void;
        orientationchange: (swiper: import("swiper/types").Swiper) => void;
        slideResetTransitionStart: (swiper: import("swiper/types").Swiper) => void;
        slideResetTransitionEnd: (swiper: import("swiper/types").Swiper) => void;
        sliderFirstMove: (swiper: import("swiper/types").Swiper, event: TouchEvent) => void;
        slidesLengthChange: (swiper: import("swiper/types").Swiper) => void;
        slidesGridLengthChange: (swiper: import("swiper/types").Swiper) => void;
        snapGridLengthChange: (swiper: import("swiper/types").Swiper) => void;
        update: (swiper: import("swiper/types").Swiper) => void;
        lock: (swiper: import("swiper/types").Swiper) => void;
        unlock: (swiper: import("swiper/types").Swiper) => void;
    }>;
    SwiperSlide: import("vue").DefineComponent<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        swiperRef: {
            type: import("vue").PropType<import("swiper/types").Swiper>;
            required: false;
        };
        lazy: {
            type: BooleanConstructor;
            default: false;
        };
        zoom: {
            type: BooleanConstructor;
            default: undefined;
        };
        virtualIndex: {
            type: StringConstructor | NumberConstructor;
            default: undefined;
        };
    }>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
