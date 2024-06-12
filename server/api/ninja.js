export default defineEventHandler(async (event) => {
    
    // handle query parameters
    const { name } = getQuery(event);

    // handle post data
    const { age } = await readBody(event);

    return {
        message: `Hello, ${name}! You are ${age} years old.`
    };
});