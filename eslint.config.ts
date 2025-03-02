import tseslint from 'typescript-eslint';
import youngjuning from '@youngjuning/eslint-config';

export default tseslint.config(youngjuning, {
  ignores: ['**/dist/**'],
});
