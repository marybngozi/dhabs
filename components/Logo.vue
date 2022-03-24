<template>
  <span>
    <svg
      v-if="theme == 'dark'"
      class="w-8 h-11 md:w-14 md:h-20"
      viewBox="0 0 109 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="logo_white" filter="url(#filter0_d_206_10)">
        <g id="arrow" :class="loading ? 'spin' : ''">
          <path
            id="Vector"
            d="M46.3948 50.9082V128.614L15.2582 106.314V56.315L24.9397 54.51V102.261L36.4507 109.243V52.7132L46.3948 50.9082ZM50.6612 46.3136L45.5415 47.2407L35.5975 49.0457L32.1925 49.6611V52.7132V102.105L29.2061 100.292V54.5182V49.8908L24.0618 50.8508L14.3803 52.6558L11 53.2875V56.3232V106.322V108.103L12.5671 109.227L43.7036 131.527L50.653 136.507V128.622V50.9082V46.3136H50.6612Z"
            fill="white"
          />
          <path
            id="Vector_2"
            d="M60.9581 50.9083L91.7337 55.6341V106.306L60.9581 128.606V50.9083ZM70.4427 108.8L81.9784 101.818V63.9782L70.4427 61.5004V108.8ZM56.6917 46.4449V50.9083V128.614V136.573L63.6738 131.511L94.4494 109.21L96.0001 108.086V106.322V55.6423V52.4918L92.4639 51.9503L61.6965 47.2162L56.6917 46.4449ZM74.7173 101.662V66.2755L77.7202 66.9237V99.8489L74.7173 101.662Z"
            fill="white"
          />
        </g>
        <g id="crown">
          <path
            id="Vector_3"
            d="M73.9951 13.569V23.8658H64.0511V10H43.0555V23.8494H32.7915V13.569H11V45.5178L53.5328 38.2977L95.9999 45.3045V13.569H73.9951ZM46.7968 27.4594V13.6018H60.3098V27.4676H77.7282V17.1708H92.2504V41.0463L53.5 34.6303L14.7331 41.194V17.1708H29.0502V27.4594H46.7968Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_206_10"
          x="0.979068"
          y="0.572704"
          width="107.855"
          height="149.427"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1.40636" dy="2" />
          <feGaussianBlur stdDeviation="5.71365" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.286275 0 0 0 0 0.741176 0 0 0 0 0.67451 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_206_10"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_206_10"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    <svg
      v-else
      class="w-8 h-11 md:w-14 md:h-20"
      viewBox="0 0 52 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="logo">
        <g id="arrow" :class="loading ? 'spin' : ''">
          <path
            id="Vector"
            d="M21.3894 24.7213V71.6797L2.57327 58.2035V27.9887L8.42386 26.8979V55.7542L15.3801 59.9735V25.812L21.3894 24.7213ZM23.9676 21.9447L20.8737 22.505L14.8645 23.5958L12.8069 23.9676V25.812V55.66L11.0021 54.5642V26.9028V24.1064L7.89334 24.6865L2.04275 25.7773L0 26.1591V27.9936V58.2085V59.2844L0.947003 59.9636L19.7631 73.4398L23.9626 76.4494V71.6846V24.7213V21.9447H23.9676Z"
            fill="#161515"
          />
          <path
            id="Vector_2"
            d="M30.19 24.7213L48.788 27.5772V58.1986L30.19 71.6748V24.7213ZM35.9216 59.7059L42.8928 55.4865V32.6196L35.9216 31.1222V59.7059ZM27.6118 22.024V24.7213V71.6797V76.4891L31.8312 73.43L50.4291 59.9538L51.3662 59.2745V58.2085V27.5821V25.6782L49.2293 25.351L30.6363 22.4901L27.6118 22.024ZM38.5048 55.3923V34.0079L40.3195 34.3995V54.2965L38.5048 55.3923Z"
            fill="#161515"
          />
        </g>
        <g id="crown">
          <path
            id="Vector_3"
            d="M38.0685 2.15679V8.37924H32.0593V0H19.3714V8.36932H13.1688V2.15679H0V21.4637L25.7029 17.1006L51.3662 21.3348V2.15679H38.0685ZM21.6323 10.5509V2.17662H29.7984V10.5559H40.3245V4.3334H49.1004V18.7616L25.6831 14.8843L2.25595 18.8508V4.3334H10.9079V10.5509H21.6323V10.5509Z"
            fill="#161515"
          />
        </g>
      </g>
    </svg>
  </span>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Logo",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["theme"]),
  },
};
</script>

<style scoped>
.spin {
  animation: rotate 1.2s linear infinite;
  transform-origin: center;
  transform-box: fill-box;
}
@keyframes rotate {
  from {
    transform: rotateZ(360deg) scale(0.9);
  }
  to {
    transform: rotateZ(0deg) scale(0.9);
  }
}
</style>
