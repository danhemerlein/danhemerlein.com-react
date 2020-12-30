const linkKeys = ["spotify", "bandcamp", "apple", "tidal", "amazon", "deezer",
                  "napster", "google play", "soundcloud"];

function createLinksObject(arr) {
   arr.map(project => {
        let k = [];
        for (let key of linkKeys) {
          let o = {
            title: "",
            link: "",
          };
          if (key === "google play") {
            o.title = "google play";
            o.link = project.fields["googlePlay"];
            k.push(o);
          } else {
            o.title = key;
            o.link = project.fields[key];
            if (project.fields[key] !== undefined) {
              k.push(o);
            }
          }
        }
        project.fields["links"] = k;
      })
}

export default createLinksObject;
