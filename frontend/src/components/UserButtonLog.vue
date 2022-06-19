
<script>
export default {
  name: "UserButtonLog",
  props: {
    buttonText: String,
    buttonClass: String
  },
};
</script>
<template>
    <button :class="buttonClass">{{ buttonText }}</button>
</template>

<style scoped lang="scss">
$color-formButton: pink;
$color-logoutButton: #4E5166;

button {
  cursor: pointer;
}
.formButton {
    width: 200px;
    height: 50px;
    background-color: pink;
    font-size: 20px;
    color: white;
    border-radius: 30px;
    border: none;

    &:active {
      background-color: darken($color-formButton, 20);
    }

    &:disabled {
      background-color: lightgrey;
    }
}

.logoutButton {
    width: 200px;
    height: 50px;
    background-color: $color-logoutButton;
    font-size: 20px;
    color: white;
    border-radius: 30px;
    border: none;

    &:active {
      background-color: darken($color-logoutButton, 20);
    }
}
</style>