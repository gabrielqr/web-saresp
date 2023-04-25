import pandas as pd
import os

def corrige_csv(nome_do_arquivo_entrada, nome_do_arquivo_saida):
    if not os.path.isfile(nome_do_arquivo_entrada):
        raise FileNotFoundError(f'O arquivo {nome_do_arquivo_entrada} não existe.')
    
#le arquivo
    df = pd.read_csv(nome_do_arquivo_entrada, delimiter=';',decimal=',')

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
    
# trunca a partir da terceira casa decimal
    df_com_medias.loc[:, 'medprof'] = df_com_medias['medprof'].round(3)

# anota as colunas originais e traz as colunas originais no arquivo final
    colunas_originais = ['CodRMet', 'CODESC', 'NOMESC', 'SERIE_ANO', 'medprof']
    df_com_medias[colunas_originais].to_csv(nome_do_arquivo_saida, index=False)

# Nome do arquivo CSV que será importado (inicial) e o filenamefinal
filename_inicial = "SARESP_escolas_2019.csv"
filename = "dados_saresp_atualizado2019.csv"

#roda a funcao
corrige_csv(filename_inicial, filename)