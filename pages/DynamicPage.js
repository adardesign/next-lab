import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  import('../components/DynamicLoadedComponent'),
  {
    loading: () => <p>...</p>
  }
)

const DynamicPage = (props) => (
  <div>
    <DynamicComponentWithCustomLoading />
    <p>Dynamicly loaded component</p>
  </div>
 )

 export default DynamicPage