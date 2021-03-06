# AwesomeColumns

Easy to create columns for React with calculated scroll speeds

[CodeSandBox example](https://codesandbox.io/s/awesome-columns-example-jbdr8?file=/src/App.js)

### Version History

- v2.0.0:
  - Core structure updates
  - Changed from reliance on react states to RAF for updates
  - Improved mobile compatibility
  - Removed smooth scrolling (not functioning) and added scrollResolution

- v1.0.0-1.1.16:
  - Project initialisation
  - Typescript features
  - onScroll, onTop, and onBottom functionality

### Usage


````
import AwesomeColumns, { Column } from "awesome-columns";

export default function App() {
  const ContainerStyle ={color:"blue"}
  return (
    <div className="container">
        <AwesomeColumns style={ContainerStyle}>
          <Column>
            Your first column's content
          </Column>
          <Column>
            Your second column's content
          </Column>
          <Column reverse>
            Your last column's content
          </Column>
        </AwesomeColumns>
    </div>
  );
}
````
By default, the container is set to 100vh and 100% width!

### Additional parameters
#### AwesomeColumns
`<AwesomeColumns {parameters}></AwesomeColumns>`

`style`:`object` - React styled component, pass in css styles to the container

`height`:`string` - Height of the containing div

`width`:`string` - Width of the containing div

`scrollResolution`: `number` - As the name implies creates a scroll resoution with the value in % of the total scrollable height

e.g.:
`<AwesomeColumns width={"50%"} height={"200px"} style={{color:"blue}}> {Columns}</AwesomeColumns>`

#### Column
`<Column {parameters}></Column>`

`style`:`object` - React styled component, pass in css styles to the column

`reverse`:`boolean` - Flips the column 180 degrees

`padding`: `string` - Designate padding to the AwesomeColumnContent class easily

`onTop`: `function` -  A functional prop that executes when the columns reach the top

`onBottom`: `function` - A functional prop that executes when the columns reach the bottom

`onScroll`: `function` - A functional prop that executes on scroll with the current scroll height as a parameter (in %)

e.g.:
`<Column style={{color:"blue}}> Content goes here</AwesomeColumns>`

`<Column reverse> Upside-down content goes here</Column>`

`<Column padding={"5px"}> This column will span 3 columns</Column>`


### CSS modifiers (Class names for css modification)

`AwesomeColumnContainer` - wrapper class for AwesomeColumns

`AwesomeColumn` - wrapper class for Column

`AwesomeColumnContent` - Inner class for Column (for reverse and effects)

`AwesomeColumnSubContent` - wrapper class for your content