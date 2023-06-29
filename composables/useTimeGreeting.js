import { ref, onMounted } from 'vue';

export default function useTimeGreeting() {
    const greeting = ref('');

    const getTimeGreeting = () => {
        const date = new Date();
        const currentHour = date.getHours();

        if (currentHour >= 5 && currentHour < 12) {
            greeting.value = 'Good morning';
        } else if (currentHour >= 12 && currentHour < 18) {
            greeting.value = 'Good afternoon';
        } else {
            greeting.value = 'Good evening';
        }
    };

    onMounted(() => {
        getTimeGreeting();
    });

    return { greeting };
}