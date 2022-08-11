const catNorms = {
    t4: {
        min: 0.5,
        max: 2.6
    },
    ft4: {
        min: 0.5,
        max: 2.6
    },
    tsh: {
        min: 0.03,
        max: 0.3
    },
    fol: {
        min: 9.4,
        max: 30.0
    },
    b12: {
        min: 900,
        max: 2800
    } 
};

const dogNorms = {
    t4: {
        min: 1.5,
        max: 4.5
    },
    ft4: {
        min: 0.6,
        max: 3.7
    },
    tsh: {
        min: 0.001,
        max: 0.3
    },
    fol: {
        min: 7.5,
        max: 17.5
    },
    b12: {
        min: 300,
        max: 800
    }
};

const t4CatRules = {
    151: 'U niektórych kotów z nadczynnością tarczycy stężenie T4 wolnej może utrzymywać się w granicach zakresu referencyjnego.',
    152: 'Wysokie stężenie T4 wolnej wskazuje na hipertyreozę.',
    153: 'Wysokie stężenie T4 wolnej, przy jednoczesnym wątpliwym stężeniu T4 całkowitej wskazuje na hipertyreozę z wysokim prawdopodobieństwem, pod warunkiem obecności klinicznych objawów nadczynności tarczycy.',
    154: 'Podwyższone stężenie T4 wolnej może być spowodowane współistniejącą chorobą pozatarczycową. Biorąc pod uwagę stężenie T4 całkowitej hipertyreoza jest mało prawdopodobna.',
    160: 'Niewykrywalne stężenie cTSH z jednoczesnym wzrostem stężenia T4 z wysokim prawdopodobieństwem wskazuje na nadczynność tarczycy.',
    161: 'Niewykrywalne stężenie cTSH może wskazywać na nadczynność tarczycy. Należy jednak mieć na uwadze, że u pewnego odsetka (ok. 30%) kotów zdrowych lub cierpiących z powodu chorób pozatarczycowych stężenie cTSH mieści się również poniżej zakresu oznaczalności.',
    162: 'Wykrywalne stężenie cTSH wraz z prawidłowym lub wątpliwym stężeniem T4 pozwala z dużym prawdopodobieństwem wykluczyć nadczynność tarczycy. Należy jednak mieć na uwadze, że u niewielkiego odsetka (ok. 2%) kotów chorych stężenie cTSH mieści się w granicach zakresu oznaczalności.',
    163: 'Wykrywalne a zarazem podwyższone stężenie cTSH wraz z prawidłowym lub wątpliwym stężeniem T4 pozwala z dużym prawdopodobieństwem wykluczyć nadczynność tarczycy, a jednocześnie może wskazywać na choroby pozatarczycowe.',
    164: 'Podwyższone stężenie cTSH przy prawidłowym stężeniu T4 może sugerować subkliniczną niedoczynność tarczycy lub być spowodowane chorobami pozatarczycowymi.',
    165: 'Podwyższone stężenie cTSH przy jednoczesnym spadku stężenia T4 wskazuje na jatrogenną lub pierwotną niedoczynność tarczycy.',
    166: 'Prawidłowe stężenie cTSH przy jednoczesnym spadku stężenia T4 wskazuje na obecność choroby pozatarczycowej i zespół eutyreozy chorobowej.',
    171: 'Wykrywalne stężenie cTSH pozwala z dużym prawdopodobieństwem wykluczyć nadczynność tarczycy. Należy jednak mieć na uwadze, że u niewielkiego odsetka (ok. 2%) kotów chorych stężenie cTSH mieści się w granicach zakresu oznaczalności. W przypadku jednoczesnego spadku stężenia hormonów tarczycowych wynik sugeruje obecność choroby pozatarczycowej i zespół eutyreozy chorobowej.',
    172: 'Niewykrywalne stężenie cTSH może wskazywać na nadczynność tarczycy. Należy jednak mieć na uwadze, że u pewnego odsetka (ok. 30%) kotów zdrowych lub cierpiących z powodu chorób pozatarczycowych stężenie cTSH mieści się również poniżej zakresu oznaczalności. Dlatego otrzymany wynik należy interpretować wraz z uwzględnieniem stanu klinicznego pacjenta oraz wyników oznaczeń hormonów tarczycowych (T4, fT4).',
    173: 'Podwyższone stężenie cTSH przy jednoczesnym spadku stężenia hormonów tarczycowych wskazuje na jatrogenną lub pierwotną niedoczynność tarczycy. Jeśli natomiast hormony tarczycowe utrzymują się na prawidłowym poziomie, wynik może sugerować subkliniczną niedoczynność tarczycy lub choroby pozatarczycowe.',
    181: 'Brak podwyższenia stężenia cTSH przy jednoczesnym spadku stężenia hormonów tarczycowych sugeruje z największym prawdopodobieństwem obecność choroby pozatarczycowej i zespół eutyreozy chorobowej oraz pozwala wykluczyć jatrogenną lub pierwotną niedoczynność tarczycy.'
};

const t4DogRules = {
    1: 'Stężenie T4 całkowitej jest obniżone, jednak wartość TSH wskazuje na prawidłowe funkcjonowanie tarczycy. Możliwe przyczyny takiego stanu:\n- ok. 30% klinicznych postaci niedoczynności tarczycy wykazuje prawidłowy poziom TSH\n- schorzenia pozatarczycowe (euthyroid sick syndrome) - m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie\n- stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ)',
    2: 'Stężenie hormonów tarczycy jest obniżone, jednak wartość TSH wskazuje na prawidłowe    jej funkcjonowanie. Możliwe przyczyny takiego stanu:\n- ok. 30% klinicznych postaci niedoczynności tarczycy wykazuje prawidłowy poziom TSH\n- schorzenia pozatarczycowe (euthyroid sick syndrome)- m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie\n- stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ)',
    3: 'Wysokie prawdopodobieństwo niedoczynności tarczycy.\nW celu dodatkowego potwierdzenia diagnozy można oznaczyć stężenie TSH, należy jednak mieć na uwadze, że ok. 30% klinicznych postaci niedoczynności tarczycy wykazuje prawidłowy poziom TSH.',
    4: 'Wysokie prawdopodobieństwo niedoczynności tarczycy.',
    5: 'Podejrzenie niedoczynności tarczycy. Należy mieć na uwadze, że niektóre schorzenia pozatarczycowe (m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie) oraz stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ) mogą powodować supresję hormonów tarczycy. W celu dodatkowego potwierdzenia diagnozy można oznaczyć stężenie TSH, należy jednak mieć na uwadze, że ok. 30% klinicznych postaci niedoczynności tarczycy wykazuje prawidłowy poziom TSH. Dodatkowo należy mieć na uwadze ze u chartów oraz innych dobrze wytrenowanych psów występują fizjologicznie niższe wartości T4 oraz fT4.',
    6: 'Podejrzenie niedoczynności tarczycy.\n Należy mieć na uwadze, że niektóre schorzenia pozatarczycowe (m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie) oraz stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ) mogą powodować supresję hormonów tarczycy.',
    7: 'Wyniki wskazują na prawidłowe funkcjonowanie tarczycy.',
    8: 'Wartość T4 na granicy zakresu referencyjnego. W przypadku istnienia podejrzenia o niedoczynność tarczycy na podstawie objawów klinicznych zaleca się powtórzenie badania po upływie 3-4 miesięcy.\nNależy mieć na uwadze, że niektóre schorzenia pozatarczycowe (m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie) oraz stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ) mogą powodować supresję hormonów tarczycy.',
    9: 'Wartość TSH wskazuje na prawidłowe funkcjonowanie tarczycy.Wartość T4 na granicy zakresu referencyjnego.\nW przypadku istnienia podejrzenia o niedoczynność tarczycy na podstawie objawów klinicznych zaleca się powtórzenie badania po upływie 3-4 miesięcy. Należy mieć na uwadze, że niektóre schorzenia pozatarczycowe (m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie) oraz stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ) mogą powodować supresję hormonów tarczycy.',
    10: 'Podwyższone stężenie TSH może mieć miejsce również w stanie prawidłowego funkcjonowania tarczycy.\nMożliwe inne przyczyny takiego stanu:\n- niewystarczająca lub nieregularna terapia zastępcza\n- latentna niedoczynność tarczycy\n- w bardzo rzadkich przypadkach może dochodzić do zakłócenia funkcji przeciwciał T4 w badaniach in vitro, co pozoruje wyższe wartości T4.',
    11: 'Stężenie TSH na granicy zakresu referencyjnego.\nUwzględniając obniżoną wartość T4 wynik z dużym prawdopodobieństwem wskazuje na niedoczynność tarczycy.',
    12: 'Wysokie prawdopodobieństwo niedoczynności tarczycy.\nStężenie TSH wskazuje na prawidłowe funkcjonowanie tarczycy, jednak należy mieć na uwadze, że ok. 30% klinicznych postaci niedoczynności tarczycy wykazuje prawidłowy poziom TSH.',
    13: 'Podwyższone stężenie T4 całkowitej może wskazywać na nadczynność tarczycy. Ze względu na niską częstotliwość jej występowania u psów przed wdrożeniem badań dodatkowych należy wykluczyć inne możliwe przyczyny takiego wyniku, takie jak:\n- suplementacja L-tyroksyny\n- tyreotoksykoza pokarmowa (dieta oparta na surowych produktach pochodzenia zwierzęcego)\n- faza kompensacji we wczesnym etapie niedoczynności tarczycy\n- obecność przeciwciał przeciwko T4 w przebiegu niedoczynności tarczycy tła immunologicznego\n- estrogenizacja\n- hepatopatia ze wzrostem syntezy białek wiążących T4 - fizjologicznie wyższe stężenie T4 u psów ras małych',
    14: 'Ze względu na podwyższone stężenie T4 całkowitej i wolnej oraz nieoznaczalne stężenie TSH pod uwagę należy brać nadczynność tarczycy.\nW dalszej diagnostyce zaleca się wykonanie badań obrazowych w kierunku wykrycia ewentualnych guzów tarczycy oraz badanie cytologiczne narządu. Wykluczyć należy możliwość suplementacji L-tyroksyny lub tyreotoksykozy pokarmowej u tego pacjenta.',
    15: 'Pojedyncze oznaczenie T4 wolnej ma niską wartość diagnostyczną i w niektórych przypadkach może prowadzić do postawienia błędnej diagnozy.',
    16: 'Pojedyncze oznaczenie TSH ma niską wartość diagnostyczną i w niektórych przypadkach może prowadzić do postawienia błędnej diagnozy.',
    17: 'Wyniki wskazują na prawidłowe funkcjonowanie tarczycy.\nW przypadku wciąż istniejącego podejrzenia niedoczynności tarczycy na podstawie objawów klinicznych zaleca się oznaczenie stężenia T4 całkowitej, przy czym należy pamiętać, że niektóre schorzenia pozatarczycowe (m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie) oraz stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ) mogą powodować supresję hormonów tarczycy.',
    18: 'Podejrzenie niedoczynności tarczycy.W przypadku istniejącego podejrzenia niedoczynności tarczycy na podstawie objawów klinicznych zaleca się oznaczenie stężenia T4 całkowitej, przy czym należy pamiętać, że niektóre schorzenia pozatarczycowe (m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie) oraz stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ) mogą powodować supresję hormonów tarczycy.',
    19: 'Wartość TSH wskazuje na prawidłowe funkcjonowanie tarczycy. Wartość T4 wolnej na granicy zakresu referencyjnego. W przypadku istniejącego podejrzenia niedoczynności tarczycy na podstawie objawów klinicznych zaleca się oznaczenie stężenia T4 całkowitej, przy czym należy pamiętać, że niektóre schorzenia pozatarczycowe (m.in. gorączka, stany zapalne, choroby wątroby i nerek, Cushing, wygłodzenie) oraz stosowane leki (kortykosteroidy, barbiturany, sulfonamidy, NLPZ) mogą powodować supresję hormonów tarczycy.'
};

const b12Rules = {
    1: 'Brak wskazań na zaburzenia wchłaniania lub dysbakteriozę.',
    2: 'Obniżone stężenie wit. B12 wskazuje na występowanie schorzenia dystalnej części jelita cienkiego (j. krętego) wraz z zaburzeniem wchłaniania i/lub przerost flory bakteryjnej (SIBO). Wykluczyć należy niedobory żywieniowe wit. B12.',
    3: 'Podwyższone stężenie wit. B12 może wskazywać na procesy immunoproliferacyjne lub być efektem jej zwiększonej suplementacji w diecie.',
    4: 'Podwyższone wartości wit. B12 i kwasu foliowego spowodowane mogą być ich zwiększoną suplementacją w diecie. Podwyższone stężenie kwasu foliowego może wskazywać również na przerost flory bakteryjnej (SIBO).',
    5: 'Obniżone stężenie kwasu foliowego wskazuje na występowanie schorzenia proksymalnej części jelita cienkiego (dwunastnicy, j. czczego) wraz z zaburzeniem wchłaniania. Wykluczyć należy niedobory żywieniowe kwasu foliowego.',
    6: 'Podwyższone stężenie kwasu foliowego wskazuje na przerost flory bakteryjnej (SIBO).\nMożliwe inne przyczyny takiego stanu to:\n- zwiększona suplementacja kwasu foliowego w diecie\n- hemoliza w próbce',
    7: 'Podwyższone stężenie kwasu foliowego wskazuje na przerost flory bakteryjnej (SIBO). Jednocześnie występuje podejrzenie schorzenia dystalnej części jelita cienkiego (j. krętego) wraz z zaburzeniem wchłaniania. Wykluczyć należy niedobory żywieniowe wit. B12.',
    8: 'Podwyższone stężenie wit. B12 może wskazywać na procesy immunoproliferacyjne lub być efektem jej zwiększonej suplementacji w diecie. Jednocześnie występuje podejrzenie schorzenia proksymalnej części jelita cienkiego (dwunastnicy, j. czczego) wraz z zaburzeniem wchłaniania. Wykluczyć należy niedobory żywieniowe kwasu foliowego.',
    9: 'Obniżone stężenia kwasu foliowego i wit. B12 wskazują na występowanie schorzenia jelita cienkiego wraz z zaburzeniem wchłaniania i/lub przerost flory bakteryjnej (SIBO). Wykluczyć należy niedobory żywieniowe wit. B12 i kwasu foliowego.'
}