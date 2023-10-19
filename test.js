require ("dotenv/config")


function  test(expectedSecret){
    const secretMatches = process.env.MEANING_OF_LIFE == expectedSecret;
    console.log(`the secret ${secretMatches?"":"not"}matches`)
    console.log(`the meaning of life is ${process.env.MEANING_OF_LIFE}`)
    console.log(secretMatches)
}

test(42)