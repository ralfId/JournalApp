import cloudinary from 'cloudinary'

import { uploadImage } from "../../helpers/uploadImage";

cloudinary.config({ 
    cloud_name: 'dvupfwoil', 
    api_key: '438367725861226', 
    api_secret: 'UoEzVkQySOTjXr0HcqHIW4zFE3s' 
  });


describe('pruebas en uploadImage.js', () => {

    
    // test('debe de cargar un archivo y retornar el url, prueba en uploadImage(file) ', done => {

    //     jest.setTimeout(20000)
    //     //request to url image
    //     const req = await fetch('https://st2.depositphotos.com/8005734/46506/i/1600/depositphotos_465067538-stock-photo-composition-with-plate-of-pasta.jpg');
    //     //blob from fetch reponse
    //     const blob = await req.blob();
    //     //create a blob file
    //     const file = new File([blob], 'foto.jpg')

    //     const imageUrl = await uploadImage(file);

    //     expect(typeof imageUrl).toBe('string')

    //     /* DELETE AN UPLOAD IMAGE IN TEST */
    //     //GETING PUBLIC ID FROM IMAGEURL
    //     const url = imageUrl.split('/');
    //     const imgPublicId = url[url.length - 1].replace('.jpg', '')
        
    //     const  sdf = cloudinary.v2.api.delete_resources(imgPublicId, {}, ()=>{done()})
    //     console.log(sdf)
    // });

    test('debe de retornar un error al cargar una imagen', async () => {
        
        const file = new File([], 'foto.jpg')

        const imageUrl = await uploadImage(file);

        expect(imageUrl).toBe(null)
    });
});