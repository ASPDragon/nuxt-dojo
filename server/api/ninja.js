export default defineEventHandler(async (event) => {
    
    // handle query parameters
    const { name } = useQuery(event);

    // handle post data
    const { age } = await useBody(event);

    return {
        message: `Hello, ${name}! You are ${age} years old.`
    };
});