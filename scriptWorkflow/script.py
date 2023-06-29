import pandas as pd
import os
import csv
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials

class Uploader:

    def corrige_csv(self, nome_do_arquivo_entrada, nome_do_arquivo_saida):
        if not os.path.isfile('scriptWorkflow/CSV Files/'+nome_do_arquivo_entrada):
            raise FileNotFoundError(f'O arquivo {nome_do_arquivo_entrada} não existe.')
        
    #le arquivo
        df = pd.read_csv('scriptWorkflow/CSV Files/'+ nome_do_arquivo_entrada, delimiter=';',decimal=',', encoding='latin1')
    
    #pega o ano do nome_do_arquivo_entrada
        ano = ''.join(filter(str.isdigit, nome_do_arquivo_entrada))

    # checa duplicados em 'NOMESC' e 'SERIE_ANO' oa mesmo tempo 
        duplicatas = df[df.duplicated(['NOMESC', 'SERIE_ANO'], keep=False)]

    # se for duplicado, calcula a media das disciplinas
        medias = duplicatas.groupby(['NOMESC', 'SERIE_ANO'])['medprof'].mean().reset_index()

    # combina as medias com as colunas originais que precisamos
        df_com_medias = pd.merge(df, medias, on=['NOMESC', 'SERIE_ANO'], how='left')

    # 'medprof' que nao sao duplicadas mantem o valor - fillNaN
        df_com_medias['medprof_y'] = df_com_medias['medprof_y'].fillna(df_com_medias['medprof_x'])
        
    # descarta a coluna 'medprof_x' e renomear a coluna 'medprof_y' para 'medprof'
        df_com_medias = df_com_medias.drop('medprof_x', axis=1).rename(columns={'medprof_y': 'medprof'})
        
    # retira as escolas e serie_ano duplicadas
        df_com_medias = df_com_medias.drop_duplicates(subset=['NOMESC', 'SERIE_ANO'], keep='first')
        
    #trunca a partir da terceira casa decimal
        df_com_medias.loc[:, 'medprof'] = df_com_medias['medprof'].round(3)
    
    #adiciona o ano
        df_com_medias['ano'] = ano

    #anota as colunas originais e traz as colunas originais no arquivo final
        colunas_originais = ['codRMet', 'CODESC', 'NOMESC', 'SERIE_ANO', 'medprof', 'ano']
        df_com_medias[colunas_originais].to_csv(nome_do_arquivo_saida, index=False)

    def upload_csv(self, filename_inicial):
        # Nome do arquivo CSV que será importado (inicial) e o filenamefinal
        filename = filename_inicial[:-4] + '_atualizado.csv'

        #roda a funcao corrige_csv
        self.corrige_csv(filename_inicial, filename)

        # aqui comeca importacao to firebase
        # Inicialize o SDK do Firebase com suas credenciais
        firebase_admin.initialize_app()
        db = firestore.client()

        # abre o arquivo CSV e guarda em csvreader
        with open(filename, 'r') as csvfile:
            csvreader = csv.reader(csvfile)
            
            # ignora cabeçalho
            next(csvreader)
            
            # percorre as linhas e colunas
            for row in csvreader:
                data = {
                    "codRMet": row[0],
                    "CODESC": row[1],
                    "NOMESC": row[2],
                    "SERIE_ANO": row[3],
                    "medprof": row[4],
                    "ano": row[5]
                }
                # envia o data de cada coluna para o servidor firebase  
                db.collection("Escolas").add(data)
            #debug
        print("Importação concluída com sucesso para o Firebase!")
        print('O arquivo ' + filename_inicial+ '     foi upado.')

    def upload_missing_csv(self):
        return_value = -1
        csv_files = os.listdir('scriptWorkflow/CSV Files')

        with open('scriptWorkflow/CSV Files/added_csvs.txt') as f:
            added = f.readlines()

        for file in csv_files:
            if((file+'\n') not in added):
                with open('scriptWorkflow/CSV Files/added_csvs.txt', 'a') as f:
                    f.write(file + '\n')
                self.upload_csv(file)
        return_value = 1     
        return return_value
uploader = Uploader()
uploader.upload_missing_csv()