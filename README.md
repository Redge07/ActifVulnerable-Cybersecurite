# ActifVulnerable-Cybersecurite

---------------------
Voici tous les modules à importer
------------------------
import pandas as pd <br>
from bs4 import BeautifulSoup <br>
import requests <br>
import nltk <br>
from nltk.corpus import stopwords, wordnet <br>
from nltk.tokenize import word_tokenize <br>
from nltk.stem import WordNetLemmatizer <br>
from transformers import AutoTokenizer, AutoModelForQuestionAnswering <br>
import torch <br>
from transformers import AutoTokenizer, AutoModelForQuestionAnswering <br>
from sklearn.decomposition import NMF <br>
from sklearn.feature_extraction.text import TfidfVectorizer <br>
import re <br>

Pour lancer l'interface utilisateur lancer cette commande dans un terminal dans le dossier "IUStageCAPEC"
"python -m http-server" et le site apparaitra avec le lien "localhost:8000" qu'il faudra taper dans l'url d'un navigateur. 
