# Weather App

One of these APIs should do the job.
1- [here](https://www.metaweather.com/api/) or [here](https://weatherstack.com/documentation) or [here](https://api.windy.com/)
or [here](https://openweathermap.org/api)
If you face issue fetching the data maybe [this](https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors/43268098) helpsa.

## Requirements

Create an application that fetches data from one of the above API.

1- the app functionallity should look like this you are free to change design be as creative as possible .check the examples down for inspirations\*\*
![weather](Weather.png)

## Optional

1- Background image of the web page changes according to the Weather.

**\*PS**: Let's use tailwind css for this since everyone is so excited about it :) \*

\*_Those are some [images](https://static.dribbble.com/users/2158940/screenshots/7376567/media/35649246137de1ce1d3f68d4ad1e1ffa.png) for [inspiration](https://static.dribbble.com/users/2158940/screenshots/7118235/media/1ea59d43e8e99a529220bed091f8eb84.png)._

## The Code

- The code should be totally clean and checked line by line before committing and pushing.
- You shouldn't leave any unnecessary comments in the code.
- Don't leave any logs inside the code.
- All variables should be `const` except for specific cases where you will need to use `let`
- Variables should use camelCase naming convention
- CSS classes should follow BEM naming convention. _You can find more about it [here](http://getbem.com/naming/)._
- Leave only one empty line between CSS classes. This also goes for different purpose code blocks (like `imports` and variables under it).
- Make sure your naming is right and not confusing i.e. the `Navbar` shouldn't be named `header` or when you fetch `movies` your function should return `movies` not `data`
- Make sure you clean your imported modules or files that you don't use before committing. The same goes for any variable, function or piece of code not used.
- Don't repeat yourself (DRY). Make sure the code you write is reusable and reduce repetition of information of all kinds. For example, don't write two functions that do the same or almost the same job. R*ead more about DRY [here](https://en.wikipedia.org/wiki/Don't_repeat_yourself).*

## Project structure

- depending on what flow to take

  - Follow the component container pattern, so your two main folders inside the `src` will be the `components` folder that will contain your components and `containers` that will contain container components. _You can read more about container components [here](https://reactpatterns.com/#container-component) or you can ask you team leader about it for more clarity._
  - similar concept you can use the component page
    take a look [here](https://blog.bitsrc.io/structuring-a-react-project-a-definitive-guide-ac9a754df5eb)

- Use `scss` instead of css if you going with `react-bootstrap`
- You can use `postcss` if you are going with another library that uses something like `tailwind`
- Global style variables will be inside a `style` folder inside the `src` inside a `_variables.scss.` If you are using `react-bootstrap` this can come in handy!
- The main folder names inside the `src` should be lower case like `components` and `container or pages` other folders inside them should be TitleCase like `ProgressBar` and files inside these folder will be TitleCase too like `ProgressBar.js.` If you need styles then add them with the same `.js` file name like `ProgressBar.scss`

Your project hierarchy should look something similar to this:

```
.
├── src
	├── components
		├── ProgressBar
			├── ProgressBar.jsx
			├── ProgressBar.scss
	├── containers
		├── About
				├── ContactForm.jsx
				├── About.jsx
	├── style
		├── _variables.scss
```

- All dependencies inside the `package.json` should be used in the project.
- It's recommended to use Yarn to install the packages.
- General use images should be inside a folder inside `src` under `images` and try to use `svg` as much as possible. Component specific images should be under their folders.
- You should have prettier extension installed and make sure your code is well formatted before submitting it.
