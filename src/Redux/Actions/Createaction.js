import firebase from "../../firebase";

export let FetchPosts = (poster,state) => {
  return async dispatch => {
    let AUDIO_POSTER = poster.audio_poster.name;
   
    let uploadTask = firebase
      .storage()
      .ref(`music-poster/${AUDIO_POSTER}`)
      .put(poster.audio_poster);
    

    uploadTask.on(
      "STATE_CHANGED",
      snapshot => {},
      error => {
        throw error;
      },
      async () => {
        let DownloadPoster = await firebase
          .storage()
          .ref("music-poster")
          .child(AUDIO_POSTER)
          .getDownloadURL();
        console.log(DownloadPoster);

        firebase.database().ref("audio_library").push({...state,
          DownloadPoster,
        });
          
      }
    );
    dispatch({
      type: "Add_Data",
      payload: uploadTask,
    });
  };
};


export let fetchfoods = () => {
    return async dispatch => {
        let foodlist = firebase.database().ref("audio_library");
        foodlist.on("value", callback => {
            let fooditems = [];
            callback.forEach(food => {
                let { DownloadPoster, audio_title, price, category } =food.val();
                fooditems.push({
                    id: food.key,
                    title: audio_title,
                    price: price,
                    poster: DownloadPoster,
                    category: category,
                })
                 dispatch({
                   type: "UploadData",
                   payload: fooditems,
                 });
            });
           
        })
    }

}

export let Increement = (items) => {
    return async dispatch => {
        let cartitems = items;
        dispatch({
          type: "cart",
          payload: cartitems,
        });
    }
    
}