import React from 'react';
import { Deck, Slide, Heading, List, ListItem, Text } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';

import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// Examples
import Welcome from './components/Welcome';
import ContactInput from './components/ContactInput';
import AddressBook from './components/AddressBook';
import App from './components/app';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

const theme = createTheme({
  primary: '#fff',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Helvetica',
  secondary: 'Montserrat',
  tertiary: {
    name: 'Roboto',
    googleFont: true,
    styles: ['400', '700']
  }
});

export default () => (
  <Deck transition={['slide']} theme={theme} transitionDuration={500}>
    <Slide bgColor="tertiary">
      <Heading size={1} fit caps textColor="white" lineHeight={1} bg="tertiary" textFont="tertiary">
        React Basics
      </Heading>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading textColor="primary" textFont="tertiary">React</Heading>
      <List>
        <ListItem>Creates HTML elements based on JSX</ListItem>
        <ListItem>Uses components, which can be nested</ListItem>
        <ListItem>Components can be a Class or a function</ListItem>
        <ListItem>Data is passed down the component tree</ListItem>
        <ListItem>Data is passed to components as props</ListItem>
        <ListItem>Props can not be changed</ListItem>
        <ListItem>State can be changed</ListItem>
        <ListItem>State can pass down tree as props</ListItem>
      </List>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading fit textColor="primary" textFont="tertiary">Project Overview</Heading>
      <Text textColor="primary" textFont="tertiary" textAlign="left">
        In this project, you will make a contact list. The application will have the following components:
      </Text>
      <List>
        <ListItem>AddressBook: Controls the app's state</ListItem>
        <ListItem>ContactInput: A form to input contacts</ListItem>
        <ListItem>ContactList: Builds a list of all contacts</ListItem>
        <ListItem>Contact: Displays info for each contact</ListItem>
      </List>
    </Slide>
    <CodeSlide
      lang="js"
      code={Welcome}
      ranges={[
        { loc: [0, 0], title: 'Welcome Component' },
        { loc: [0, 1], note: 'Must import React for components' },
        { loc: [2, 9], note: 'Components can be written as functions' },
        { loc: [3, 9], note: 'Es6 arrow functions allow explicit return' },
        { loc: [4, 8], note: 'Components must return one parent element' },
        { loc: [5, 7], note: 'Unlimited child elements. Try changing these' },
        { loc: [10, 11], note: 'Components can be exported to be used by other components, or defined in the same file' }
      ]}
    />
    <CodeSlide
      lang="js"
      code={ContactInput}
      ranges={[
        { loc: [0, 0], title: 'ContactInput Component' },
        { loc: [3, 4], note: 'Component can receive props to define and handle changes to data. Props are passed as a parameter' },
        { loc: [5, 6], note: 'Must handle the form data once it is submitted' },
        { loc: [6, 13], note: 'Define the form inputs' },
        { loc: [10, 11], note: 'Must handle data changes in each input' },
        { loc: [11, 12], note: 'Data must be passed back to input as it changes' },
        { loc: [38, 43], note: 'PropTypes must be defined when props are used' }
      ]}s
    />
    <CodeSlide
      lang="js"
      code={AddressBook}
      ranges={[
        { loc: [0, 0], title: 'AddressBook Component' },
        { loc: [1, 2], note: 'Import components to use within other components' },
        { loc: [4, 5], note: 'Component must be a class to have state' },
        { loc: [5, 14], note: 'Unlike props, state can be changed within a component' },
        { loc: [5, 14], note: 'Define the initial state to be used on first render' },
        { loc: [40, 46], note: 'Pass state as props to child components' },
        { loc: [41, 43], note: 'Define functions to handle data changes' },
        { loc: [15, 21], note: 'Handle input changes' },
        { loc: [16, 18], note: 'Must not directly mutate state' },
        { loc: [19, 20], note: 'Use setState to merge new values' },
        { loc: [22, 34], note: 'Handle form submission' },
        { loc: [23, 24], note: 'Stop page reload on submit' },
        { loc: [27, 33], note: 'Can merge multiple keys in state at once' }
      ]}
    />
    <CodeSlide
      lang="js"
      code={App}
      ranges={[
        { loc: [0, 0], title: 'App Component' },
        { loc: [1, 2], note: 'Use react-router components' },
        { loc: [6, 16], note: 'BrowserRouter must have one child. Wrap children in div' },
        { loc: [12, 13], note: 'Add a route directed to AddressBook' },
        { loc: [8, 10], note: 'Links lead to the defined routes' }
      ]}
    />
    <CodeSlide
      lang="js"
      code={Contact}
      ranges={[
        { loc: [0, 0], title: 'Contact Component' },
        { loc: [6, 10], note: 'Inputs can be empty, so must handle cases with no data to avoid errors' },
        { loc: [6, 10], note: 'Can use brackets in jsx to handle data/use variables inside elements' },
        { loc: [6, 7], note: 'Can use basic if statements to return components else nothing' },
        { loc: [16, 22], note: 'Object properties can have shape defined' }
      ]}
    />
    <CodeSlide
      lang="js"
      code={ContactList}
      ranges={[
        { loc: [0, 0], title: 'ContactList Component' },
        { loc: [7, 8], note: 'Map data into components' },
        { loc: [7, 8], note: 'Elements created by iterating over data require a unique key' }
      ]}
    />
    <CodeSlide
      lang="js"
      code={AddressBook}
      ranges={[
        { loc: [0, 0], title: 'Completing the Application' },
        { loc: [45, 46], note: 'Add ContactList to display the contacts as they are added' }
      ]}
    />
    <Slide bgColor="tertiary">
      <Heading fit textColor="primary" textFont="tertiary">Extra Challenges</Heading>
      <List>
        <ListItem>Make inputs required/optional</ListItem>
        <ListItem>Validate inputs based on type</ListItem>
        <ListItem>Create a button to remove contacts</ListItem>
      </List>
    </Slide>
    <Slide bgColor="tertiary">
      <Heading fit textColor="primary" textFont="tertiary">Best Practices</Heading>
      <List>
        <ListItem>Use functional components over Class</ListItem>
        <ListItem>Minimize using state in components</ListItem>
        <ListItem>Keep data flow one-way</ListItem>
      </List>
    </Slide>
  </Deck>
);
