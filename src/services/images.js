export default function ImagesAPI(){

    this.apiHost = `https://api.unsplash.com/photos/?client_id=ZvrqmXXkq_oZ0JmlDXelGXBIQnJsiNnDRiR0cAfgd0Q`
    this.limit = 20;

    this.getImages = async function(page=1, limit=20){
        this.limit = limit;
        console.log(this.apiHost)
        try{
            const resp = await fetch(`${this.apiHost}&page=${page}&per_page=${limit}`);
            if(resp.status !== 200){
                return {error: resp.statusText}
            }
            return await resp.json();
        }
        catch(e){
            return {error:e.message}
        }
    }

    

} 