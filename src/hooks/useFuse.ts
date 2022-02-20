import Fuse from "fuse.js";

/**
 * A React Hook that filters an array using the Fuse.js fuzzy-search library.
 *
 * @param list The array to filter.
 * @param searchPattern The search term to filter by.
 * @param options Options for Fuse.js.
 *
 * @returns The filtered array.
 *
 * @see https://fusejs.io/
 */
export default function useFuse<T>(
  list: Array<T>,
  searchPattern: string | Fuse.Expression,
  options?: Fuse.IFuseOptions<T>,
  index?: Fuse.FuseIndex<T>,
  searchOptions?: Fuse.FuseSearchOptions
): Array<Fuse.FuseResult<T>> {
  const fuse = useMemo(
    () => new Fuse<T>(list, options, index),
    [list, options, index]
  );

  const results = useMemo(() => {
    return fuse.search<T>(searchPattern, searchOptions);
  }, [fuse, searchPattern, searchOptions]);

  return results;
}
