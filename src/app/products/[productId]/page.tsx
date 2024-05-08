export default function Details({
    params,
}: {
    params: {productId: string};
}){

    return <h1>Details of Products goes here!!!{params.productId}</h1>
}