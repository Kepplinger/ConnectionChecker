/**
 * Created by kepplinger on 12.10.16.
 */
interface Serializable<T> {
  deserializable(input: Object): T;
}
