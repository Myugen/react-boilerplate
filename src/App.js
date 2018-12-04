import React from 'react';

import axios from 'axios';

class App extends React.Component {
  state = {
    CaptainKirkBio: {},
    Foo: null,
  };

  componentDidMount() {
    this.onGetKirkBio();
    import(/* webpackChunkName: 'Foo' */ './components/Foo/Foo')
      .then((Foo) => {
        this.setState({ Foo: Foo.default });
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  onGetKirkBio = async () => {
    try {
      const response = await axios.post(
        'http://stapi.co/api/v1/rest/character/search',
        { title: 'James T. Kirk', name: 'James T. Kirk' },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
      );
      const result = await response.data;
      const character = result.characters[0];
      this.setState({ CaptainKirkBio: character });
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    const { CaptainKirkBio, Foo } = this.state;
    return (
      <div className="app">
        <img alt="header" src="/dist/images/header.jpeg" className="app-header" />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I
          frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so, we
          will be able to prove it.
        </p>
        <p>- Captain Kirk</p>
        <section>
          {Object.values(CaptainKirkBio).length === 0 ? (
            <p>Loading User Information</p>
          ) : (
            <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(CaptainKirkBio)}</p>
          )}
        </section>
        {Foo ? <Foo /> : <p>Foo is loading</p>}
      </div>
    );
  }
}

export default App;
