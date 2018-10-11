import { shallowMount } from '@vue/test-utils';
import MessageList from '@/components/MessageList';

describe('MessageList.test.js', () => {
    let cmp;

    beforeEach(() => {
        cmp = shallowMount(MessageList, {
            propsData: {
                messages: ['Cat', 'Dog', 'Parakeet']
            }
        });
    });

    it('has received ["Cat"] as the message property', () => {
        expect(cmp.vm.messages).toEqual(['Cat', 'Dog', 'Parakeet']);
    });

    it('has the expected html structure', () => {
        expect(cmp.element).toMatchSnapshot();
    });
});
