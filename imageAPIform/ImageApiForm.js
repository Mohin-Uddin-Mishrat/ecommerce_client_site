import React from 'react';

const imageApiForm = () => {
    const { register, handleSubmit } = useForm();
    const imghostKey = "7c212d64a8c3c99f1fa90b588d76ae03";
    const onSubmit = data => {
      const image = data.image[0];
      const formdata = new FormData();
      formdata.append('image', image);
  
      fetch(`https://api.imgbb.com/1/upload?key=${imghostKey}`, {
        method:'POST',
        body: formdata
      })
      .then(res =>res.json())
      .then(inf =>{
        console.log(inf.data.url);
        const info ={
          title:data.title,
          categoryName:data.categoryName,
          decription:data.description,
          price:data.price,
          image:inf.data.url
  
        }
  
        fetch('http://localhost:5000/products ',{
          method:'POST',
          headers:{
            "content-type":"application/json",
          },
          body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
          toast('successfully added data')
          console.log(data)});
  
      })
  
      
    }
    return (
      <div className='flex justify-center items-center'>
        <div className='w-96 h-96 '>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your bio</span>
                </label>
                <textarea  {...register("title")} placeholder="title" className="textarea textarea-bordered h-16" ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your bio</span>
                </label>
                <textarea  {...register("categoryName")} placeholder="categoryName" className="textarea textarea-bordered h-16" ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your bio</span>
                </label>
                <textarea  {...register("price")} placeholder="price" className="textarea textarea-bordered h-16" ></textarea>
              </div>
  
  
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your bio</span>
                </label>
                <textarea  {...register("description")} className="textarea textarea-bordered h-16" placeholder="description"></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your bio</span>
                </label>
                <input type='file' {...register("image")} className="input input-bordered h-16" placeholder=""></input>
              </div>
            </div>
            <input type="submit" />
          </form>
  
        </div>
      </div>
    );
};

export default imageApiForm;