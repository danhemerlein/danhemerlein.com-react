import ContainerBase from '../lib/ContainerBase';
import * as contentful from 'contentful';
import keys from '../config';

class MainContainer extends ContainerBase {
  view = import('../views/MainView');

  client = contentful.createClient({
    space: keys.spaceId,
    accessToken: keys.accessToken
  })

  model = () => {
    const model = {};

    this.client.getEntries({
      'content_type': 'musicProject'
    }).then(function (entries) {
      model.musicProjects = entries;
    })

    this.client.getEntries({
      'content_type': 'codeProject'
    }).then(function (entries) {
      model.codeProjects = entries;
    })

    this.client.getEntries({
      'content_type': 'musicPage'
    }).then(function (entries) {
      model.musicPage = entries;
    })

    this.client.getEntries({
      'content_type': 'moodboard'
    }).then(function (entries) {
      model.moodboard = entries;
    })

    this.client.getEntries({
      'content_type': 'aboutPage'
    }).then(function (entries) {
      model.aboutPage = entries;
    })

    console.log('this is the modal i am trying to create', model);

    // return this.client.getEntries().then(response => response.items)
    return model;
  }
}

export default MainContainer;
