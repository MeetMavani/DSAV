import SortingVisualizer from "../../components/AlgorithmVisualizer/Sorting/SortingVisualizer"
import { mergeSort } from "../../utils/sortingAlgorithms"

function Stack() {

  return (
    <section className="flex flex-col max-w-7xl mx-auto px-4 py-8 md:px-12 lg:px-24">

        <div className="mb-4 p-4 bg-gray-100 rounded-xl shadow-md">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Merge Sort Visualizer (HPC Mini Project)</h2>
            <p className="text-gray-700">
                This visualizer demonstrates how Merge Sort works step-by-step. It also allows performance tracking for different input sizes to align with HPC concepts.
            </p>
        </div>

        <SortingVisualizer title="Merge" algorithmFn={mergeSort}/>
    </section>
  )
}

export default Stack