import Test from 'ava';
import Bot from '../src';


Test(`default`, t => {
  t.truthy(true);
});

Test(`should fail`, t => t.truthy(false));

