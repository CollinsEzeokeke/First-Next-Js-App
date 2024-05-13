export default function Review({
    params,
}: {
    params: {review: string}
}){

    return <h1>i am page{[params.review]} </h1>
}