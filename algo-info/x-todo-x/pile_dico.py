#!/usr/bin/env python3

class PileDict:
    _TAG_TOP  = "sommet"
    _TAG_NEXT = "suivant"

    def __init__(self):
        self.cell = {
            self._TAG_TOP : None,
            self._TAG_NEXT: None
        }

    def est_vide(self):
        return self.cell[self._TAG_TOP] is None

    def new_next(self):
        return PileDict()

    def has_next(self):
        return not self.cell[self._TAG_NEXT].est_vide()

    def empiler(self, elt):
        if self.est_vide():
            self.cell[self._TAG_NEXT] = self.new_next()
            self.cell[self._TAG_TOP]  = elt
        
        else:           
            self.cell[self._TAG_NEXT].empiler(self.cell[self._TAG_TOP])
            self.cell[self._TAG_TOP] = elt

    def depiler(self):
        assert self.est_vide() != True

        topelt = self.cell[self._TAG_TOP]

        if self.has_next():
            self.cell[self._TAG_TOP] = self.cell[self._TAG_NEXT].depiler()

        else:
            self.cell[self._TAG_TOP] = None

        return topelt

    def __repr__(self):
        if self.est_vide():
            return "<VIDE>"

        return self._repr_recu(True)

    def _repr_recu(self, firstcall):
        top_elt_txt = repr(self.cell[self._TAG_TOP])

        if self.has_next():
            next_txt = self.cell[self._TAG_NEXT]._repr_recu(False)
        else:
            next_txt = ""

        if next_txt:
            next_txt += " -> "

        if firstcall:
            top_txt = " <sommet>"
        else:
            top_txt = ""

        return f"{next_txt}{top_elt_txt}{top_txt}"


class PileDictOrdo(PileDict):
    def new_next(self):
        return PileDictOrdo()

    def empiler(self, elt):
        if self.est_vide():
            self.cell[self._TAG_TOP]  = elt
            self.cell[self._TAG_NEXT] = self.new_next()
        
        else:
            top_elt = self.cell[self._TAG_TOP]

            if elt > top_elt:
                self.cell[self._TAG_TOP] = elt
                self.cell[self._TAG_NEXT].empiler(top_elt)

            else:
                self.cell[self._TAG_NEXT].empiler(elt)


# -- TESTS -- #

for kind, p in [
    ("NON ORDO", PileDict()    ),
    ("ORDO"    , PileDictOrdo()),
]:
    deco = "-"*len(kind)
    print(deco, kind, deco, sep = "\n")

    p.empiler(1)
    p.empiler(3)
    p.empiler(4)
    p.empiler(2)
    p.empiler(7)
    print(p)

    p.depiler()
    print(p)

    p.depiler()
    print(p)

    p.empiler(10)
    p.empiler(3)
    p.empiler(1)
    p.empiler(4)
    p.empiler(25)
    p.empiler(7)
    print(p)
