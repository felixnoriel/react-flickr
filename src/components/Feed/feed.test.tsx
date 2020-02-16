import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { FeedInfo, Feed } from './feed';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Feed', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<FeedInfo feed={{}}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('loading feed', () => {
    const loading = shallow(<FeedInfo feed={{}} />);
    expect(loading.text()).toEqual('Loading ...');
  });

  test('feed list using mock data', () => {
    const wrapper = mount(<FeedInfo feed={testJSONData} />);
    expect(wrapper.find('.feed-info')).toHaveLength(1);
    expect(wrapper.find('.list-item')).toHaveLength(2);
    expect(wrapper.find('.loading')).toHaveLength(0);
  });

  test('feed item using mock data', () => {
    const wrapper = mount(<Feed feedItem={testJSONData.items[0]} />);
    expect(wrapper.find('.list-item')).toHaveLength(1);
    expect(wrapper.find('.title').text()).toEqual('ampe-32.jpg');
  });
  
})

const testJSONData = {
    "title": "Uploads from everyone",
    "link": "https:\/\/www.flickr.com\/photos\/",
    "description": "",
    "modified": "2020-02-16T11:28:56Z",
    "generator": "https:\/\/www.flickr.com",
    "items": [{
        "title": "ampe-32.jpg",
        "link": "https:\/\/www.flickr.com\/photos\/philgent\/49541716993\/",
        "media": {"m":"https:\/\/live.staticflickr.com\/65535\/49541716993_20dcebedd3_m.jpg"},
        "date_taken": "2019-09-14T18:25:30-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/philgent\/\">philippe ampe<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/philgent\/49541716993\/\" title=\"ampe-32.jpg\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49541716993_20dcebedd3_m.jpg\" width=\"240\" height=\"160\" alt=\"ampe-32.jpg\" \/><\/a><\/p> ",
        "published": "2020-02-16T11:28:56Z",
        "author": "nobody@flickr.com (\"philippe ampe\")",
        "author_id": "157418280@N02",
        "tags": "symphysodonaequifasciatus pairidaiza aquarium cambroncasteau"
   },
   {
    "title": "ampe-32.jpg",
    "link": "https:\/\/www.flickr.com\/photos\/philgent\/49541716993\/",
    "media": {"m":"https:\/\/live.staticflickr.com\/65535\/49541716993_20dcebedd3_m.jpg"},
    "date_taken": "2019-09-14T18:25:30-08:00",
    "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/philgent\/\">philippe ampe<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/philgent\/49541716993\/\" title=\"ampe-32.jpg\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49541716993_20dcebedd3_m.jpg\" width=\"240\" height=\"160\" alt=\"ampe-32.jpg\" \/><\/a><\/p> ",
    "published": "2020-02-16T11:28:56Z",
    "author": "nobody@flickr.com (\"philippe ampe\")",
    "author_id": "157418280@N02",
    "tags": "symphysodonaequifasciatus pairidaiza aquarium cambroncasteau"
    }]
}