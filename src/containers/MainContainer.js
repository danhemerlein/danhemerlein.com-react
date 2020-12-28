
import ContainerBase from '../lib/ContainerBase';
import * as contentful from 'contentful';
import keys from '../config';

class MainContainer extends ContainerBase {
  view = import('../views/MainView');

  client = contentful.createClient({
    space: keys.spaceId,
    accessToken: keys.accessToken
  })

  model = (props) => {
    const model = {};

    const contentTypes = ['musicProject', 'codeProject', 'musicPage','moodboard'];

    contentTypes.map(type => {
      this.client.getEntries({
        'content_type': type
      }).then(function(entries) {
        model[type] = entries;
      })
    })


    // return this.client.getEntries().then(response => response.items)
    return model;
  }
}

export default MainContainer;
