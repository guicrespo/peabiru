import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context';

const HistoryPage = () => {
  const { setOpenWho, setUnderscore } = useContext(AppContext);

  useEffect(() => {
    setOpenWho(true);
    setUnderscore('history');
  }, []);

  return (
    <article className="content-body">
      <h2>História</h2>
      <p className="history-p">
        {`Somos um núcleo de pesquisa em história e constitucionalismo da América Latina.
        O nome PEABIRU homenageia os senderos indígenas que ligavam os Andes ao Oceano Atlântico, 
        atravessando os atuais territórios do Peru, da Bolívia, do Paraguai e do Brasil.`}
      </p>
      <p className="history-p">
        {`Nosso intuito é pesquisar sobre uma história silenciada e minimizada pelo discurso jurídico hegemônico, 
        bem como abrir caminhos para uma crítica da teoria e da prática constitucional contemporânea.`}
      </p>
      <p className="history-p">
        {`Assim, o Peabiru se apresenta como um grupo interdisciplinar, composto por pessoas de todo o Brasil 
        interessadas nos entrelaçamentos entre história e direito a partir de uma perspectiva renovada da 
        história da América Latina e da formação do direito moderno.`}
      </p>
    </article>
  );
};

export default HistoryPage;
