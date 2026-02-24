import React from 'react';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';


type PropsCampus = {
  name: string;
  anoDeFundacao?: number;
  tel: number;
};


type PropsInstitutoFederal = {
  sigla: string;
  uf: string;
  children?: ReactNode;
};


const Campus = ({ name, anoDeFundacao, tel }: PropsCampus) => {
  return (
    <View>
      <Text>
        O campus {name} foi fundado em {anoDeFundacao} telefone para contato{' '}
        {tel}
      </Text>
    </View>
  );
};


const InstitutoFederal = ({ sigla, uf, children }: PropsInstitutoFederal) => {
  return (
    <View>
      <Text>
        {sigla} - {uf}{' '}
      </Text>
      <View>{children}</View>
    </View>
  );
};


const APP = () => {
  return (
    <>
      <InstitutoFederal sigla="IFAL" uf="AL">
        <Campus name="Maceió" anoDeFundacao={1909} tel={8299999999} />
        <Campus name="Rio Largo" anoDeFundacao={2014} tel={828888888} />
        <Campus name="Satuba" anoDeFundacao={1905} tel={82777777777} />
      </InstitutoFederal>


      <InstitutoFederal sigla="IFPE" uf="PE">
        <Campus name="Palmares" anoDeFundacao={2014} tel={8166666666666} />
        <Campus name="Garanhuns" anoDeFundacao={2010} tel={815655555555} />
      </InstitutoFederal>
    </>
  );
};


export default APP;


import React from 'react';
import { ReactNode } from 'react';
import { Text, View } from 'react-native';


type PropsCampus = {
  name: string;
  anoDeFundacao?: number;
  tel: number;
};


type PropsInstitutoFederal = {
  sigla: string;
  uf: string;
  children?: ReactNode;
};


const Campus = ({ name, anoDeFundacao, tel }: PropsCampus) => {
  return (
    <View>
      <Text>
        O campus {name} foi fundado em {anoDeFundacao} telefone para contato{' '}
        {tel}
      </Text>
    </View>
  );
};


const InstitutoFederal = ({ sigla, uf, children }: PropsInstitutoFederal) => {
  return (
    <View>
      <Text>
        {sigla} - {uf}{' '}
      </Text>
      <View>{children}</View>
    </View>
  );
};


const APP = () => {
  return (
    <>
      <InstitutoFederal sigla="IFAL" uf="AL">
        <Campus name="Maceió" anoDeFundacao={1909} tel={8299999999} />
        <Campus name="Rio Largo" anoDeFundacao={2014} tel={828888888} />
        <Campus name="Satuba" anoDeFundacao={1905} tel={82777777777} />
      </InstitutoFederal>


      <InstitutoFederal sigla="IFPE" uf="PE">
        <Campus name="Palmares" anoDeFundacao={2014} tel={8166666666666} />
        <Campus name="Garanhuns" anoDeFundacao={2010} tel={815655555555} />
      </InstitutoFederal>
    </>
  );
};


export default APP;
