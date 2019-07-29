# TriviaGameNativescript
​
The TriviaGameNativescript is an example project written in NativeScript. In this repository, we are using NativeScript with Angular so you will need to be familiar with the second one and also with Typescript at least at the basic level.
​
<img src="https://cdn.merixstudio.com/media/uploads/2019/07/26/nativscript_app_1.gif" alt="TriviaGameNativescript" width="33%"/>
<img src="https://cdn.merixstudio.com/media/uploads/2019/07/26/nativescript_app_2.gif" alt="TriviaGameNativescript" width="33%"/>
<img src="https://cdn.merixstudio.com/media/uploads/2019/07/26/nativescript_app_3.gif" alt="TriviaGameNativescript" width="33%"/>
​
Be sure that you read our step-by-step guide:
​
[Creating a mobile app in NativeScript - part 1](http://bit.ly/2K8ubCh)
​
Stay tuned for next parts!
​
## Prerequisite
​
The NativeScript CLI is the command-line interface for interacting with NativeScript. We will use it during the whole process of developing our project - starting from creating an app, through debuging, and ending at running emulators.
​
Installing Nativescript CLI usually comes down to run one command in the terminal:
​
```bash
npm install -g nativescript@5.4.2
```
​
If you’ll meet any problems, check the official documentation where you’ll find a detailed description of the set-up process. You will also find there a step-by-step guide about preparing an environment for your operating system and install particular phone emulators which is useful in case it’s the first mobile app.
​
## Run
​
If you are curious about the final result, you can jump directly to the end and test it locally.
​
```bash
git clone -b step5 https://github.com/merixstudio/TriviaGameNativescript.git
cd TriviaGameNativescript
npm install
```
​
You are ready to run the app. Use one of the following command, depending on the device you want to use:
​
```bash
tns run ios -—bundle --emulator
```

```bash
tns run android —-bundle --emulator
```

## Contributing
​
If you have suggestions for new features or find a bug, please use the [issue tracker](https://github.com/merixstudio/TriviaGameNativescript/issues).
​
​
## License
[Apache License](https://choosealicense.com/licenses/apache-2.0/)
