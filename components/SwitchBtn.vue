<template>
  <div :for="id + '_button'" :class="{ active: isDark }" class="toggle__button">
    <input
      type="checkbox"
      :disabled="disabled"
      :id="id + '_button'"
      :checked="isDark"
      @change="changeTheme"
    />
    <!-- v-model="checkedValue" -->
    <span class="toggle__switch"></span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "SwitchBtn",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "primary",
    },
  },
  data() {
    return {};
  },
  created() {
    if (this.$colorMode.preference == "system") {
      this.$colorMode.preference == "dark";
      this.$colorMode.value == "dark";
    }

    this.setTheme(this.$colorMode.value);
  },
  computed: {
    isDark() {
      return this.$colorMode && this.$colorMode.value == "light" ? false : true;
    },
    checkedValue: {
      get() {
        return this.isDark;
      },
      set(newValue) {
        this.isDark = newValue;
        this.changeTheme();
      },
    },
  },
  methods: {
    ...mapMutations(["setTheme"]),

    changeTheme() {
      const newColorMode = this.$colorMode.value == "dark" ? "light" : "dark";

      this.$colorMode.preference = newColorMode;
      this.setTheme(newColorMode);
    },
  },
};
</script>

<style scoped>
div {
  width: 103px;
  height: 47px;
  position: relative;
}
.toggle__button {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle__button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 47px;
  z-index: 2;
  cursor: pointer;
}
.toggle__button .toggle__switch {
  display: inline-block;
  height: 45px;
  border-radius: 115px;
  width: 100%;
  background: #161515;
  box-shadow: inset 0 0 1px #bfcbd9;
  position: relative;
  transition: all 0.25s;
}
.toggle__button .toggle__switch::after,
.toggle__button .toggle__switch::before {
  content: "";
  position: absolute;
  display: block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: #fff;
  left: 7px;
  top: 5px;
  transform: translateX(0);
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}
.toggle__button .toggle__switch::after {
  background: #fff;
  background-image: url("/light-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 1px #fff;
}
.toggle__button .toggle__switch::before {
  background: #231f20;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  opacity: 0;
}
/* .toggle__button .toggle__switch::after {
  background: #fff;
  background-image: url("/light-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
  background: #fff;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  opacity: 0;
} */
.active .toggle__switch {
  background: #fff;
  box-shadow: inset 0 0 1px #d4d4d4;
}
.active .toggle__switch::after,
.active .toggle__switch::before {
  transform: translateX(calc(73px - 35px));
}
.active .toggle__switch::after {
  left: 23px;
  background: #161515;
  background-image: url("/dark-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 1px #666;
}
</style>
