import { shallowMount } from '@vue/test-utils';
import App from '@/App';

describe('App.vue', () => {
    let cmp;

    beforeEach(() => {
        cmp = shallowMount(App, {
            data: () => {
                return { messages: ['Cat'] };
            }
        });
    });

    it('equals messages to ["Cat"]', () => {
        expect(cmp.vm.messages).toEqual(['Cat']);
    });

    it('has the expected html structure', () => {
        expect(cmp.vm.$el).toMatchSnapshot();
    });
});
