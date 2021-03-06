<template>
  <div>
    <header class="py-20">
      <div class="container">
        <div class="md:px-0 md:w-2/3 mx-auto px-5 text-center">
          <h1 class="font-bold leading-tight mb-4 md:text-6xl text-4xl">
            Website Theme
          </h1>
          <p class="mb-3">
            This Website was created using
            <a href="https://tailwindcss.com" target="_blank" rel="noopener">Tailwind CSS</a>.
          </p>
          <p>
            It was my first time using Tailwind. Here you can find the theme and
            <code>tailwind.config.js</code> I was using.
          </p>
        </div>
      </div>
    </header>
    <section class="pb-6">
      <div class="container">
        <ul
          class="gap-5 grid grid-cols-2 sm:grid-cols-3"
          :class="`lg:grid-cols-${colors.length}`">
          <li v-for="color in colors" :key="color.label">
            <h2 class="font-bold mb-4 text-center text-xl">
              {{ color.label }}
            </h2>
            <ColorList :colors="color.values" />
          </li>
        </ul>
        <p class="md:px-0 mt-4 px-5">
          The color palette was generated with
          <a href="https://colors.eva.design" target="_blank" rel="noopener">Eva's Design System</a>.
        </p>
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <h2 class="mb-4 md:px-0 md:text-3xl px-5 text-2xl">
          tailwind.config.js
        </h2>
        <!-- eslint-disable vue/no-v-html -->
        <code
          class="block leading-5 lg:text-base md:overflow-x-auto md:p-4 md:text-sm overflow-x-scroll p-2 rounded-sm text-xs whitespace-no-wrap"
          v-html="tailwindConfigJson" />
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </section>
  </div>
</template>

<script>
import ColorList from '@/components/ColorList';
import tailwindConfig from '@/tailwind.config.js';

const getDarkestShadeValue = color => Object.keys(color)
  .sort((a, b) => b - a)
  .slice(0, 1)
  .map(key => color[key])[0];

const colorsObjToArr = colorsObj => Object.keys(colorsObj).map(key => {
  const darkestShade = getDarkestShadeValue(colorsObj[key]);
  const color = {
    label: key.charAt(0).toUpperCase() + key.slice(1),
    values: Object.keys(colorsObj[key])
      .filter(colorKey => !colorKey.startsWith('transparent'))
      .map(colorKey => ({
        value: colorsObj[key][colorKey],
        complementary:
            // use dark color for all values of 500 or less
            parseInt(colorKey, 10) > 500 ? 'white' : darkestShade,
      })),
  };
  return color;
});

const jsonToHtml = json => json.replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;');

export default {
  components: { ColorList },

  asyncData() {
    const { colors: colorsObj } = tailwindConfig.theme.extend;
    const tailwindConfigJson = JSON.stringify(tailwindConfig, null, 2);

    return {
      colors: colorsObjToArr(colorsObj),
      tailwindConfigJson: jsonToHtml(tailwindConfigJson),
    };
  },
};
</script>
