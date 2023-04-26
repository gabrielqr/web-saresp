import pandas as pd
import os

def corrige_csv(nome_do_arquivo_entrada):
    print('O arquivo ' + nome_do_arquivo_entrada+ ' foi upado.')

//print(os.listdir())
csv_files = os.listdir('scriptWorkflow/CSV Files')

with open('scriptWorkflow/CSV Files/added_csvs.txt') as f:
    added = f.readlines()

for file in csv_files:
    if((file+'\n') not in added):
        with open('scriptWorkflow/CSV Files/added_csvs.txt', 'a') as f:
            f.write(file + '\n')
        corrige_csv(file)
        

