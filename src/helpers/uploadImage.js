


export const uploadImage = async (file) => {

    try {
        const cloudUrl = 'https://api.cloudinary.com/v1_1/dvupfwoil/image/upload';

        const formData = new FormData();
        formData.append('upload_preset', 'journal-app-ractjs');
        formData.append('file', file);

        const cloudReq = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (cloudReq.ok) {
            const cloudResp = await cloudReq.json();

            return cloudResp.secure_url;
        } else {
            // throw await cloudReq.json();
            return null;
        }

    } catch (error) {
        console.log('uploadImage>>>>>>>>>>>>>>>>'+error)
    }
}
