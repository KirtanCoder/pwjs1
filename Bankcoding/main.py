import google.generativeai as genai
import speech_recognition as sr
import webbrowser
import os
import pyttsx3
import time

# pip install pocketsphinx

recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def aiProcess():
    API_KEY = "AIzaSyC90eDWN8moA9PgOFG4yGEBy1JX0GXE2Go"
    genai.configure(api_key=API_KEY)

    generation_config = {
        "temperature": 0.7,
        "top_p": 0.9,
        "top_k": 1,
        "max_output_tokens": 100,
    }

    try:
        model = genai.GenerativeModel('gemini-1.5-flash',
                                      generation_config=generation_config)
        convo = model.start_chat()
    except Exception as e:
        print(f"Error initializing Generative AI model: {e}")
        return

    wake_word = "matrix"
    activated = False
    stop_word = "exit"  # Add a stop word to exit the loop
    timeout = 10  # Set a timeout of 10 seconds

    while True:
        try:
            with sr.Microphone() as source:
                print("Listening...")
                audio = recognizer.listen(source, timeout=timeout)
                print("Recognizing...")
                user_input = recognizer.recognize_google(audio, language='en-in')
                print(f"User said: {user_input}\n")
        except sr.UnknownValueError:
            print("Error: Unknown value")
            speak("Sorry, I didn't understand that. Please try again.")
            continue
        except sr.RequestError as e:
            print(f"Error: {e}")
            speak("Error: " + str(e))
            continue
        except sr.WaitTimeoutError:
            print("Timeout: No input received")
            speak("Timeout: No input received. Exiting program...")
            os._exit(0)  # Exit the program after timeout

        if wake_word in user_input.lower():
            speak("Activating Matrix...")
            activated = True
        elif activated:
            if stop_word in user_input.lower():  # Check for stop
                speak("Stopping Matrix and exiting...")
                break  # Exit the loop
            elif "youtube" in user_input.lower():  # Check for YouTube URL
                speak("Opening YouTube...")
                url = "https://www.youtube.com/" + user_input.replace("youtube", "").strip()
                webbrowser.open(url)
            elif "youtube" in user_input.lower():  # Check for facebook URL
                speak("Opening facebook...")
                url = "https://facebook.com" + user_input.replace("facebook", "").strip()
                webbrowser.open(url)
            elif "google" in user_input.lower():  # Check for google URL
                speak("Opening google...")
                url = "https://google.com/" + user_input.replace("google", "").strip()
                webbrowser.open(url)
            elif "linkdin" in user_input.lower():  # Check for linkdin URL
                speak("Opening linkdin...")
                url = "https://linkedin.com" + user_input.replace("linkdin", "").strip()
                webbrowser.open(url)
            else:
                convo.send_message(user_input)
                response = convo.last.text
                speak(response)
                print(f"Matrix: {response}")
                if "stop" in user_input.lower():
                    speak("Stopping Matrix...")
                    activated = False
        else:
            speak("I didn't understand that. Please try again.")
# pip install virtualenv
# python -m venv ./bhola
# bhola/scripts/activate
# deactivate
    # Exit the program after the loop
    print("Exiting program...")
    os._exit(0)  # Use os._exit(0) to exit the program

# Start the speech recognition loop
aiProcess()