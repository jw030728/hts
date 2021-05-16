type TitleText = {
  title: string;
  subTitle?: string;
};

//Title 컴포넌트 만든거임
const Title = (text: TitleText) => {
  const { title, subTitle } = text; //디스트럭처링  Title.title이렇게 사용하지않고 변수처럼사용하게 만들어줌
  //return 할때 태그는  가장 바깥거 한개만 반환
  return (
    <>
      <h1>{title}</h1>
      <hr />
      <h3>{subTitle}</h3>
    </>
  );
};

export default Title;
