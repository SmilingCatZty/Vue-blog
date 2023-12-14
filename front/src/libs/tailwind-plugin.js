const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.cursor-pointer': {
      cursor: 'url(src/assets/pointer/comix-hand.cur), pointer', // 将"path_to_custom_cursor"替换为你自定义光标的路径
    },
  };

  addUtilities(newUtilities, ['responsive', 'hover']);
});