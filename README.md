# ActifVulnerable-Cybersecurite

---------------------
Voici tous les modules à importer
------------------------
import pandas as pd <br>
from bs4 import BeautifulSoup
import requests
import nltk
from nltk.corpus import stopwords, wordnet
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from transformers import AutoTokenizer, AutoModelForQuestionAnswering
import torch
from transformers import AutoTokenizer, AutoModelForQuestionAnswering
from sklearn.decomposition import NMF
from sklearn.feature_extraction.text import TfidfVectorizer
import re

Pour lancer l'interface utilisateur lancer cette commande dans un terminal dans le dossier "IUStageCAPEC"
"python -m http-server" et le site apparaitra avec le lien "localhost:8000" qu'il faudra taper dans l'url d'un navigateur. 
