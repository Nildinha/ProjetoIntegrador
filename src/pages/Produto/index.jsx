import React, { useState, useEffect } from 'react';
import FourDesigner from '../../components/itemProdutos/index';
import styled from 'styled-components';
import api from '../../services/api';
import styles from './styles.module.css';

const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ccc;
  padding: 10px;
`;

function Produtos() {
  const [pecas, setPeca] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const url = '/peca';

    const params = {};
    if (search) {
      params.title_like = search

      api.get('/peca?_embed=peca', { params })
        .then((response) => {
          console.log(response)
          setPeca(response.data)
        })

    } else {

      api.get(url)
        .then((response) => {
          setPeca(response.data)
        })

    }
  }, [search])


  return (
    <Container>
      <h1>Encontre seu Item</h1>
      <input
        className={styles.listaSearchInput}
        type="search"
        placeholder='Buscar - Digite aqui seu Produtos'
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <ListContainer>
        {
          pecas.map(peca => {
            return (<FourDesigner
              key={peca.id}
              pecas={peca}

            />)
          })
        }

      </ListContainer>
    </Container>
  )
}

export default Produtos;