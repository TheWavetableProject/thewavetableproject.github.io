import { error } from '@sveltejs/kit';

const validPages = ['build', 'use', 'learn'];

export async function load({ params }) {
    const { page } = params;
    
    if (!validPages.includes(page)) {
        throw error(404, 'Page not found');
    }
    
    try {
        const PageComponent = await import(`$lib/text/${page}.svx`);
        return {
            component: PageComponent.default,
            page
        };
    } catch (e) {
        throw error(404, 'Page not found');
    }
}