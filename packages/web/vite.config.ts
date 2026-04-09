import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

const componentEntries = {
  'components/accordion': resolve(__dirname, 'src/components/accordion.ts'),
  'components/alert': resolve(__dirname, 'src/components/alert.ts'),
  'components/breadcrumbs': resolve(__dirname, 'src/components/breadcrumbs.ts'),
  'components/button': resolve(__dirname, 'src/components/button.ts'),
  'components/carousel': resolve(__dirname, 'src/components/carousel.ts'),
  'components/checkbox': resolve(__dirname, 'src/components/checkbox.ts'),
  'components/combobox': resolve(__dirname, 'src/components/combobox.ts'),
  'components/command-palette': resolve(__dirname, 'src/components/command-palette.ts'),
  'components/data-grid': resolve(__dirname, 'src/components/data-grid.ts'),
  'components/date-picker': resolve(__dirname, 'src/components/date-picker.ts'),
  'components/dialog': resolve(__dirname, 'src/components/dialog.ts'),
  'components/drawer': resolve(__dirname, 'src/components/drawer.ts'),
  'components/empty-state': resolve(__dirname, 'src/components/empty-state.ts'),
  'components/error-summary': resolve(__dirname, 'src/components/error-summary.ts'),
  'components/file-upload': resolve(__dirname, 'src/components/file-upload.ts'),
  'components/form-field': resolve(__dirname, 'src/components/form-field.ts'),
  'components/input': resolve(__dirname, 'src/components/input.ts'),
  'components/link': resolve(__dirname, 'src/components/link.ts'),
  'components/listbox': resolve(__dirname, 'src/components/listbox.ts'),
  'components/menu': resolve(__dirname, 'src/components/menu.ts'),
  'components/number-field': resolve(__dirname, 'src/components/number-field.ts'),
  'components/pagination': resolve(__dirname, 'src/components/pagination.ts'),
  'components/popover': resolve(__dirname, 'src/components/popover.ts'),
  'components/progress-bar': resolve(__dirname, 'src/components/progress-bar.ts'),
  'components/radio-group': resolve(__dirname, 'src/components/radio-group.ts'),
  'components/rich-text-editor': resolve(__dirname, 'src/components/rich-text-editor.ts'),
  'components/search-field': resolve(__dirname, 'src/components/search-field.ts'),
  'components/select': resolve(__dirname, 'src/components/select.ts'),
  'components/skeleton': resolve(__dirname, 'src/components/skeleton.ts'),
  'components/skip-link': resolve(__dirname, 'src/components/skip-link.ts'),
  'components/slider': resolve(__dirname, 'src/components/slider.ts'),
  'components/stepper': resolve(__dirname, 'src/components/stepper.ts'),
  'components/switch': resolve(__dirname, 'src/components/switch.ts'),
  'components/table': resolve(__dirname, 'src/components/table.ts'),
  'components/tabs': resolve(__dirname, 'src/components/tabs.ts'),
  'components/text': resolve(__dirname, 'src/components/text.ts'),
  'components/textarea': resolve(__dirname, 'src/components/textarea.ts'),
  'components/time-picker': resolve(__dirname, 'src/components/time-picker.ts'),
  'components/toast': resolve(__dirname, 'src/components/toast.ts'),
  'components/tooltip': resolve(__dirname, 'src/components/tooltip.ts'),
  'components/tree-view': resolve(__dirname, 'src/components/tree-view.ts'),
  'components/visually-hidden': resolve(__dirname, 'src/components/visually-hidden.ts'),
};

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        'compa11y': resolve(__dirname, 'src/index.ts'),
        ...componentEntries,
      },
      name: 'compa11y',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['@compa11y/core'],
      output: {
        globals: {
          '@compa11y/core': 'compa11yCore',
        },
      },
    },
    sourcemap: false,
    minify: 'esbuild',
  },
});
